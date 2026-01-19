// 全局变量
let playMode = 'single'; // single, loop, random
let overlapPlay = true; // 是否重叠播放
let activeAudios = []; // 当前活动的音频对象数组
let playQueue = []; // 播放队列（当重叠播放关闭时）
let isPlaying = false;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initAudioButtonsByCategory();
    updateStatusDisplay();
    
    // 添加用户交互激活
    document.body.addEventListener('click', initAudioContext, { once: true });
});

// 初始化音频上下文（修复版）
let audioContextInitialized = false;
function initAudioContext() {
    if (!audioContextInitialized) {
        // 创建一个真正的静音音频文件（不是base64）
        const silentAudio = new Audio();
        
        // 使用一个极短的静音MP3文件（更兼容）
        silentAudio.src = 'https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3?raw=1';
        silentAudio.volume = 0.01; // 几乎听不见
        
        silentAudio.play().then(() => {
            silentAudio.pause();
            audioContextInitialized = true;
            console.log('音频上下文已激活');
        }).catch(e => {
            console.log('音频上下文激活失败，但继续:', e);
            audioContextInitialized = true; // 即使失败也标记为已激活
        });
    }
}

// 按分类初始化按钮
function initAudioButtonsByCategory() {
    const container = document.getElementById('audioButtons');
    container.innerHTML = '';
    
    // 获取所有分类
    const categories = [...new Set(audioData.map(audio => audio.category))];
    
    // 为每个分类创建一个区域
    categories.forEach(category => {
        // 获取该分类下的所有音频
        const categoryAudios = audioData.filter(audio => audio.category === category);
        
        // 创建分类容器
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        // 分类标题
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `
            <h2 class="category-title">${category}</h2>
            <span class="category-count">${categoryAudios.length}个音频</span>
        `;
        
        // 按钮容器
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'category-buttons';
        
        // 创建该分类下的所有按钮
        categoryAudios.forEach(audio => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.dataset.id = audio.id;
            button.innerHTML = `
                <div class="btn-content">
                    <div class="btn-name">${audio.name}</div>
                </div>
            `;
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                initAudioContext(); // 确保音频上下文已激活
                handleAudioClick(audio);
            });
            
            buttonsContainer.appendChild(button);
        });
        
        // 组装
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(buttonsContainer);
        container.appendChild(categorySection);
    });
}

// 处理音频点击
function handleAudioClick(audioData) {
    if (overlapPlay) {
        // 重叠播放模式：立即播放，可以多个同时播放
        playAudioImmediately(audioData);
    } else {
        // 顺序播放模式：添加到队列
        addToPlayQueue(audioData);
    }
}

// 立即播放音频（修复版）- 主要修复在这里
function playAudioImmediately(audioData) {
    console.log('尝试播放:', audioData.name, audioData.url);
    
    // 清理URL中的特殊字符
    let audioUrl = audioData.url;
    
    // 解码URL中的特殊字符（确保中文路径正确）
    try {
        // 先解码已编码的部分，然后重新编码
        audioUrl = decodeURIComponent(audioUrl);
        audioUrl = encodeURI(audioUrl);
    } catch (e) {
        console.log('URL处理正常:', audioUrl);
    }
    
    console.log('处理后的URL:', audioUrl);
    
    const audio = new Audio();
    const uniqueAudioId = `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 设置音频事件
    audio.oncanplaythrough = function() {
        console.log('音频可以播放了:', audioData.name);
    };
    
    audio.onerror = function(e) {
        console.error('音频加载错误:', e, audio.error);
        console.error('错误代码:', audio.error?.code, '错误消息:', audio.error?.message);
        removeAudioFromActive(uniqueAudioId);
        updateNowPlaying('播放失败: ' + audioData.name);
        
        // 尝试其他方式播放
        setTimeout(() => tryAlternativePlay(audioData, audioUrl), 100);
    };
    
    audio.onended = function() {
        console.log('播放结束:', audioData.name);
        removeAudioFromActive(uniqueAudioId);
    };
    
    // 设置音量
    audio.volume = 0.7;
    
    // 添加到活跃音频列表
    activeAudios.push({ id: uniqueAudioId, audio: audio, data: audioData });
    
    // 更新按钮状态
    updateButtonPlayState();
    updateStatusDisplay();
    
    // 设置音频源并尝试播放
    audio.src = audioUrl;
    audio.load(); // 显式加载
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('播放成功:', audioData.name);
            updateNowPlaying('正在播放: ' + audioData.name);
            isPlaying = true;
        }).catch(error => {
            console.error('播放失败:', error.name, error.message);
            
            // 根据错误类型处理
            if (error.name === 'NotAllowedError') {
                updateNowPlaying('请先点击页面激活音频权限');
                
                // 显示提示
                const prompt = document.createElement('div');
                prompt.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0,0,0,0.9);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    z-index: 10000;
                    text-align: center;
                `;
                prompt.innerHTML = `
                    <h3>需要激活音频权限</h3>
                    <p>请先点击页面任意位置，然后再次点击播放按钮</p>
                    <button onclick="this.parentElement.remove()" style="margin-top:10px;padding:5px 10px;">知道了</button>
                `;
                document.body.appendChild(prompt);
            } else if (error.name === 'NotSupportedError') {
                updateNowPlaying('音频格式不支持，尝试其他方式...');
                tryAlternativePlay(audioData, audioUrl);
            } else {
                updateNowPlaying('播放失败: ' + audioData.name);
            }
            
            removeAudioFromActive(uniqueAudioId);
        });
    }
}

// 尝试其他方式播放（备选方案）
function tryAlternativePlay(audioData, originalUrl) {
    console.log('尝试备选播放方案:', audioData.name);
    
    // 方案1：使用AudioContext（更底层）
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        fetch(originalUrl)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                const source = audioContext.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioContext.destination);
                source.start();
                
                console.log('使用AudioContext播放成功:', audioData.name);
                updateNowPlaying('正在播放: ' + audioData.name);
                
                source.onended = function() {
                    console.log('AudioContext播放结束');
                };
            })
            .catch(error => {
                console.error('AudioContext播放失败:', error);
                // 方案2：创建隐藏iframe播放
                tryIframePlay(audioData, originalUrl);
            });
    } catch (error) {
        console.error('AudioContext初始化失败:', error);
        tryIframePlay(audioData, originalUrl);
    }
}

// 方案2：使用iframe播放
function tryIframePlay(audioData, url) {
    console.log('尝试iframe播放:', audioData.name);
    
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.srcdoc = `
        <!DOCTYPE html>
        <html>
        <body>
            <audio src="${url}" autoplay></audio>
        </body>
        </html>
    `;
    
    document.body.appendChild(iframe);
    
    setTimeout(() => {
        document.body.removeChild(iframe);
        updateNowPlaying('尝试播放中...');
    }, 1000);
}

// 更新按钮播放状态（根据活跃音频数量）
function updateButtonPlayState() {
    const playingCountMap = {};
    
    activeAudios.forEach(item => {
        const audioId = item.data.id;
        playingCountMap[audioId] = (playingCountMap[audioId] || 0) + 1;
    });
    
    document.querySelectorAll('.category-btn').forEach(button => {
        const audioId = parseInt(button.dataset.id);
        const isPlaying = playingCountMap[audioId] > 0;
        
        if (isPlaying) {
            button.classList.add('playing');
        } else {
            button.classList.remove('playing');
        }
    });
}

// 添加到播放队列（顺序播放模式）
function addToPlayQueue(audioData) {
    if (playQueue.length === 0 && activeAudios.length === 0) {
        playFromQueue(audioData);
    } else {
        playQueue.push(audioData);
        setQueuedState(audioData.id);
    }
    
    updateQueueDisplay();
}

// 从队列播放
function playFromQueue(audioData) {
    let audioUrl = audioData.url;
    
    try {
        audioUrl = decodeURIComponent(audioUrl);
        audioUrl = encodeURI(audioUrl);
    } catch (e) {
        console.log('队列URL处理正常');
    }
    
    const audio = new Audio();
    const uniqueAudioId = Date.now();
    
    audio.onended = function() {
        removeAudioFromActive(uniqueAudioId);
        removePlayingState(audioData.id);
        
        if (playMode === 'loop') {
            setTimeout(() => {
                addToPlayQueue(audioData);
            }, 500);
        } else if (playMode === 'random') {
            setTimeout(() => {
                const randomAudio = getRandomAudio();
                if (randomAudio) {
                    addToPlayQueue(randomAudio);
                }
            }, 1000);
        } else {
            setTimeout(() => {
                playNextInQueue();
            }, 500);
        }
    };
    
    audio.onerror = function() {
        removeAudioFromActive(uniqueAudioId);
        removePlayingState(audioData.id);
        updateNowPlaying('播放失败: ' + audioData.name);
        playNextInQueue();
    };
    
    activeAudios.push({ id: uniqueAudioId, audio: audio, data: audioData });
    setPlayingState(audioData.id);
    updateStatusDisplay();
    
    const index = playQueue.findIndex(item => item.id === audioData.id);
    if (index > -1) {
        playQueue.splice(index, 1);
        removeQueuedState(audioData.id);
    }
    
    audio.src = audioUrl;
    audio.load();
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            updateNowPlaying('正在播放: ' + audioData.name);
            isPlaying = true;
        }).catch(error => {
            console.error('队列播放失败:', error);
            removeAudioFromActive(uniqueAudioId);
            removePlayingState(audioData.id);
            updateNowPlaying('播放失败: ' + audioData.name);
            playNextInQueue();
        });
    }
}

// 播放队列中的下一个
function playNextInQueue() {
    if (playQueue.length > 0) {
        const nextAudio = playQueue.shift();
        removeQueuedState(nextAudio.id);
        playFromQueue(nextAudio);
    } else {
        updateNowPlaying('播放完成');
        isPlaying = false;
    }
    updateQueueDisplay();
}

// 随机播放函数
function playRandomAudio() {
    if (audioData.length === 0) {
        updateNowPlaying('没有音频可播放');
        return;
    }
    
    initAudioContext();
    
    const randomAudio = getRandomAudio();
    if (randomAudio) {
        if (overlapPlay) {
            playAudioImmediately(randomAudio);
        } else {
            addToPlayQueue(randomAudio);
        }
    }
    
    const randomBtn = document.querySelector('.random-btn');
    const originalText = randomBtn.textContent;
    randomBtn.textContent = ` 选择: ${randomAudio.name}`;
    
    setTimeout(() => {
        randomBtn.textContent = originalText;
    }, 2000);
}

// 获取随机音频
function getRandomAudio() {
    if (audioData.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * audioData.length);
    return audioData[randomIndex];
}

// 改变播放模式
function changePlayMode(mode) {
    playMode = mode;
    updateStatusDisplay();
}

// 切换重叠播放
function toggleOverlap(isEnabled) {
    overlapPlay = isEnabled;
    updateStatusDisplay();
    
    const descElement = document.getElementById('overlapDesc');
    if (isEnabled) {
        descElement ? descElement.textContent = '开启重叠播放可同时播放多个音频' : null;
        
        if (playQueue.length > 0) {
            playQueue.forEach(audio => {
                removeQueuedState(audio.id);
            });
            playQueue = [];
            updateQueueDisplay();
        }
    } else {
        descElement ? descElement.textContent = '关闭重叠播放将按顺序播放音频' : null;
        
        if (activeAudios.length > 1) {
            for (let i = 1; i < activeAudios.length; i++) {
                activeAudios[i].audio.pause();
                removePlayingState(activeAudios[i].data.id);
            }
            const firstAudio = activeAudios[0];
            activeAudios = [firstAudio];
            updateButtonPlayState();
        }
    }
}

// 更新状态显示
function updateStatusDisplay() {
    const overlapStatus = document.getElementById('overlapStatus');
    const overlapToggle = document.getElementById('overlapToggle');
    
    if (overlapPlay) {
        overlapStatus.textContent = '开启';
        overlapStatus.className = 'status-on';
        overlapToggle.checked = true;
    } else {
        overlapStatus.textContent = '关闭';
        overlapStatus.className = 'status-off';
        overlapToggle.checked = false;
    }
    
    updateQueueDisplay();
}

// 更新队列显示
function updateQueueDisplay() {
    const queueElement = document.getElementById('playQueue');
    if (queueElement) {
        queueElement.textContent = `队列: ${playQueue.length}`;
    }
}

// 更新当前播放显示
function updateNowPlaying(text) {
    const nowPlayingElement = document.getElementById('nowPlaying');
    if (nowPlayingElement) {
        nowPlayingElement.textContent = text;
    }
}

// 设置按钮播放状态
function setPlayingState(audioId) {
    const button = document.querySelector(`[data-id="${audioId}"]`);
    if (button) {
        button.classList.add('playing');
    }
}

// 移除按钮播放状态
function removePlayingState(audioId) {
    const button = document.querySelector(`[data-id="${audioId}"]`);
    if (button) {
        button.classList.remove('playing');
    }
}

// 设置队列状态
function setQueuedState(audioId) {
    const button = document.querySelector(`[data-id="${audioId}"]`);
    if (button) {
        button.classList.add('queued');
    }
}

// 移除队列状态
function removeQueuedState(audioId) {
    const button = document.querySelector(`[data-id="${audioId}"]`);
    if (button) {
        button.classList.remove('queued');
    }
}

// 从活跃音频列表中移除
function removeAudioFromActive(uniqueAudioId) {
    const index = activeAudios.findIndex(item => item.id === uniqueAudioId);
    if (index > -1) {
        activeAudios.splice(index, 1);
    }
    updateButtonPlayState();
}

// 停止所有音频
function stopAllAudio() {
    activeAudios.forEach(item => {
        item.audio.pause();
        item.audio.currentTime = 0;
    });
    
    activeAudios = [];
    
    playQueue.forEach(audio => {
        removeQueuedState(audio.id);
    });
    playQueue = [];
    
    updateButtonPlayState();
    
    updateNowPlaying('已停止');
    updateQueueDisplay();
    isPlaying = false;
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
        if (activeAudios.length > 0) {
            const firstAudio = activeAudios[0].audio;
            if (firstAudio.paused) {
                activeAudios.forEach(item => item.audio.play());
                updateNowPlaying('继续播放');
            } else {
                activeAudios.forEach(item => item.audio.pause());
                updateNowPlaying('已暂停');
            }
        }
    } else if (e.key === 'r' || e.key === 'R') {
        playRandomAudio();
    } else if (e.key === 's' || e.key === 'S') {
        stopAllAudio();
    } else if (e.key === 'Escape') {
        stopAllAudio();
    } else if (e.key === 'o' || e.key === 'O') {
        const toggle = document.getElementById('overlapToggle');
        toggle.checked = !toggle.checked;
        toggleOverlap(toggle.checked);
    }
});

// 添加测试功能
function testAudioPlayback() {
    console.log('测试音频播放...');
    
    // 测试一个已知能播放的音频
    const testAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    testAudio.volume = 0.1;
    
    testAudio.play().then(() => {
        console.log('测试音频播放成功 - 基础音频功能正常');
        testAudio.pause();
    }).catch(error => {
        console.error('测试音频播放失败:', error);
    });
}

// 页面加载后自动测试
setTimeout(testAudioPlayback, 2000);