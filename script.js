// 我的宠物数据
const myPets = [
    {
        id: 1,
        name: "咖啡",
        type: "金毛",
        description: "精力旺盛的小金毛，喜欢在公园里追球玩耍，是我们家的开心果。",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
        birthday: "2021年8月"
    },
    {
        id: 2,
        name: "棉花",
        type: "仓鼠",
        description: "安静温柔的小可爱，最喜欢窝在麻袋里，跳起来特别有趣。",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
        birthday: "2023年1月"
    },
    {
        id: 3,
        name: "波波",
        type: "小猫",
        description: "活泼好动的小家伙，晚上总在跑轮上锻炼，白天则喜欢睡觉。",
        image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=300&fit=crop",
        birthday: "2023年5月"
    }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    renderPets();
    setupHoverEffects();
});

// 渲染宠物卡片
function renderPets() {
    const petsGrid = document.querySelector('.pets-grid');
    petsGrid.innerHTML = '';
    
    myPets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        
        petCard.innerHTML = `
            <div class="pet-img">
                <img src="${pet.image}" alt="${pet.name} - ${pet.type}" loading="lazy">
            </div>
            <div class="pet-info">
                <div class="pet-name">${pet.name}</div>
                <div class="pet-type">${pet.type}</div>
                <p class="pet-desc">${pet.description}</p>
                <div class="pet-birthday">
                    ${pet.birthday} 来到我们家
                </div>
            </div>
        `;
        
        petsGrid.appendChild(petCard);
    });
}

// 设置图片加载失败时的备用处理
function setupImageFallback() {
    // 宠物图片备用处理
    document.querySelectorAll('.pet-img img').forEach(img => {
        img.onerror = function() {
            this.src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop';
            this.alt = '宠物图片加载失败';
        };
    });
    
    // 小记图片备用处理
    document.querySelectorAll('.note-image img').forEach(img => {
        img.onerror = function() {
            this.src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&h=300&fit=crop';
            this.alt = '小记图片加载失败';
        };
    });
}

// 设置悬停效果
function setupHoverEffects() {
    // 图片加载完成后设置备用处理
    setTimeout(setupImageFallback, 1000);
    
    // 卡片悬停效果
    document.querySelectorAll('.pet-card, .note-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
}

// 控制台欢迎信息
console.log('欢迎来到我的宠物相册！');
console.log(`这里展示了我家的 ${myPets.length} 只小可爱～`);