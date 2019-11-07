/ *
通過學習網絡開發創建
YouTube頻道：https：//www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
* /

const  cvs  =  document。getElementById（“蛇”）;
const  ctx  =  cvs。getContext（“ 2d ”）;

//創建單位
const  box  =  32 ;

//加載圖片

const  ground  =  new  Image（）;
地面。src  =  “ img / ground.png ” ;

const  foodImg  =  new  Image（）;
食物。src  =  “ img / food1.png ” ;

//加載音頻文件

let dead =  new  Audio（）;
let eat =  new  Audio（）;
讓多達=  新的 音頻（）;
讓權利=  新的 音頻（）;
讓左=  新的 音頻（）;
讓下來=  新的 音頻（）;

死了。src  =  “ audio / dead.mp3 ” ;
吃。src  =  “ audio / eat.mp3 ” ;
起來。src  =  “ audio / up.mp3 ” ;
對。src  =  “ audio / right.mp3 ” ;
離開。src  =  “ audio / left.mp3 ” ;
下來。src  =  “ audio / down.mp3 ” ;

//創建蛇

讓蛇= []；

蛇[ 0 ] = {
    x ： 1  *框，
    y ： 3  *盒
};

//製作食物

讓食物= {
    x ： 數學。地板（數學。隨機（）* 17 + 1）*盒，
    y ： 數學。地板（數學。隨機（）* 15 + 3）*框
}
//創建分數var

讓分數=  100 ;

//控制蛇

讓 d = “ UP ” ;

文件。addEventListener（“ keydown ”，direction）;

函數 方向（事件）{
    讓鍵=  事件。keyCode ;
       如果（鍵==  37  &&  食品。X /盒> 1）
        食物。x-  =  1 *框;
    否則 如果（鍵==  38  &&  食品。ÿ /箱> 3）
        食物。y-  =  1 *框;
    否則 如果（鍵==  39  &&  食品。X /盒< 17）
        食物。x  + =  1 *框;
    否則 如果（鍵==  40  &&  食品。ÿ /盒< 17）
        食物。y  + =  1 *框;
}

//檢查碰撞函數
函數 衝突（頭，數組）{
    對於（讓我=  0 ;我<  陣列。長度 ;我++）{
        如果（頭。X  ==陣列[i]中。X  &&  頭。ÿ  ==陣列[i]中。ÿ）{
            返回 true ;
        }
    }
    返回 false ;
}

//將所有內容繪製到畫布上

函數 draw（）{
    
    ctx。的drawImage（接地，0，0）;
    
    for（令我=  0 ;我<  蛇。長度 ;我++）{
        ctx。fillStyle  =（i ==  0）？ “綠色” ： “白色” ;
        ctx。fillRect（蛇[i]中。X，蛇[i]中。ÿ，箱，盒）;
        
        ctx。strokeStyle  =  “紅色” ;
        ctx。strokeRect（蛇[i]中。X，蛇[i]中。ÿ，箱，盒）;
    }
    
    ctx。的drawImage（foodImg，食物。X，食品。ÿ）;
     
    //老頭位置
    令 snakeX = snake [ 0 ]。x ;
    令蛇Y =蛇[ 0 ]。Ÿ ;
    
    如果（snaceX / box - 1  && snakeY / box + 1  >  16）d = “ UP ”；
    否則 如果（snaceX /盒- 1  <  1  && Snakey的/盒- 1  <  3）d = “ RIGHT ” ;
    否則 如果（snaceX /框+ 1  >  17  && Snakey的/盒- 1  <  3）d = “ DOWN ” ;
    否則 如果（snaceX /框+ 1  >  17  && Snakey的/盒+ 1  >  17）d = “ LEFT ” ;


    //哪個方向
    如果（d ==  “ LEFT ”）snakeX- = box;
    如果（d ==  “ UP ”）snakeY- =框；
    if（d ==  “ RIGHT ”）snakeX + =框；
    如果（d ==  “ DOWN ”）snakeY + =框；

    
    
    //如果蛇吃了食物
    如果（snakeX ==  食品。X  && Snakey的==  食品。ÿ）{
        得分=得分- 5 ;
        吃。播放（）;
        食物= {
            x ： 數學。地板（數學。隨機（）* 17 + 1）*盒，
            y ： 數學。地板（數學。隨機（）* 15 + 3）*框
        }
        //我們不去掉尾巴
    }
    其他 {
        //移除尾巴
        蛇。pop（）;
    }
    
    //添加新的Head
    
    讓 newHead = {
        x ：蛇X，
        y ：蛇
    }
    
    //遊戲結束
   
    如果（分數== 0）
    {
        clearInterval（遊戲）;
        死了。播放（）;
    }
    
    蛇。unshift（newHead）;
    
    ctx。fillStyle  =  “白色” ;
    ctx。font  =  “ 45px的樟宜一” ;
    ctx。fillText（分數，2 *框，1.6 *框）;
}

//每100毫秒調用一次繪製函數

let game =  setInterval（draw，100）;
