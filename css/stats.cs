/* css/stats.css */

.page-header {
    margin-bottom: 50px;
    text-align: center;
}

.page-header h1 {
    color: #FFD60A;
    font-size: 2.8rem;
}

.page-header p {
    font-size: 1.1rem;
    color: #ccc;
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    perspective: 1000px; /* ضروري لتأثير القلب ثلاثي الأبعاد */
}

/* --- تصميم بطاقة القلب (Flip Card) --- */

.flip-card {
    background-color: transparent;
    height: 380px;
    border-radius: 15px;
    cursor: pointer;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
}

.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

/* تصميم وجه البطاقة (Front) */
.flip-card-front {
    background: linear-gradient(145deg, #2c3e50, #34495e); /* تدرج لوني أزرق-رمادي */
    border: 1px solid #5dade2;
    color: white;
}

.flip-card-front i {
    font-size: 4rem;
    color: #5dade2;
    margin-bottom: 20px;
    text-shadow: 0 0 15px rgba(93, 173, 226, 0.5);
}

.flip-card-front h3 {
    font-size: 2rem;
    margin: 0;
}

.flip-card-front .click-hint {
    position: absolute;
    bottom: 20px;
    font-size: 0.9rem;
    color: #bdc3c7;
}

/* تصميم ظهر البطاقة (Back) */
.flip-card-back {
    background: #2c3e50;
    border: 1px solid #5dade2;
    color: white;
    transform: rotateY(180deg);
    justify-content: flex-start;
    padding: 25px;
}

.flip-card-back h4 {
    font-size: 1.5rem;
    color: #5dade2;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(93, 173, 226, 0.3);
    width: 100%;
    margin-top: 0;
}

.stats-list {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}

.stats-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 5px;
    font-size: 1.1rem;
    border-bottom: 1px solid #34495e;
}

.stats-list li:last-child {
    border-bottom: none;
}

.stats-list .label {
    color: #bdc3c7;
}

.stats-list .value {
    font-weight: bold;
    font-size: 1.2rem;
    color: #fff;
}
