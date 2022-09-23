var study={
    started:false,
    idle: './1x/gif_caff_vio.gif',
    working: './1x/gif_embrion.gif',
    sleeping: './1x/gif_caff_arancione.gif',
    workMinutes: 50,
    workSeconds: 0,
    sbreakMinutes: 10, 
    sbreakSeconds: 0,
    lbreakMinutes: 30,
    lbreakSeconds: 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    init: function(){
        var self=this;
        this.minutesDom = document.querySelector("#minutes");
        this.secondsDom = document.querySelector("#seconds");
        this.interval = setInterval(function(){
            self.intervalCallback.apply(self);
        },1000);
        document.querySelector("#work").onclick = function (){
            self.startWork(self.workMinutes,self.workSeconds);
        };
        document.querySelector("#break").onclick = function (){
            self.startBreak(self.sbreakMinutes,self.sbreakSeconds);
        };
        document.querySelector("#longbreak").onclick = function (){
            self.startLongBreak(self.lbreakMinutes,self.lbreakSeconds);
        };
        document.querySelector("#gif").src = this.idle;
        document.querySelector("#closeX").onclick = function(){
            self.closeModal();
        };
        document.querySelector("#setting").onclick = function(){
            self.openModal();
        };
        document.querySelector("#btnClose").onclick = function(){
            self.closeModal();
        }
        document.querySelector('#btnSave').onclick = function(){
            var studyMin = document.querySelector('#sMinutes').value;
            var shBreakMin = document.querySelector('#sbMinutes').value;
            var lnBreakMin = document.querySelector('#lbMinutes').value;
            self.saveSettings(studyMin, shBreakMin, lnBreakMin,);
        }
    }, 
    setVariables: function(mins,secs,started){
        this.minutes = mins;
        this.seconds = secs;
        this.started = started;
    },
    startWork: function(mins,secs){
        this.setVariables(mins,secs,true);
        document.querySelector("#gif").src = this.working;
        document.body.style.backgroundColor = '#4FA387';
        document.querySelector("#work").style.backgroundColor = '#ACB5ED';
        document.querySelector("#break").style.backgroundColor = 'transparent';
        document.querySelector("#longbreak").style.backgroundColor = 'transparent';
    },
    startBreak: function(mins,secs){
        this.setVariables(mins,secs,true);
        document.querySelector("#gif").src = this.sleeping;
        document.body.style.backgroundColor = '#ACB5ED';
        document.querySelector("#work").style.backgroundColor = 'transparent';
        document.querySelector("#break").style.backgroundColor = '#FCCA58';
        document.querySelector("#longbreak").style.backgroundColor = 'transparent';
    },
    startLongBreak: function(mins,secs){
        this.setVariables(mins,secs,true);
        document.querySelector("#gif").src = this.idle;
        document.body.style.backgroundColor = '#FCCA58';
        document.querySelector("#work").style.backgroundColor = 'transparent';
        document.querySelector("#break").style.backgroundColor = 'transparent';
        document.querySelector("#longbreak").style.backgroundColor = '#FFA4DC';
    },
    toDoubleDigit: function(num){
        if(num < 10) { 
            return "0" + parseInt(num,10);
        } else {
            return num;
        }
    },
    updateDom: function(){
        this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
        this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
    },
    intervalCallback: function(){
        if(!this.started) return false;
        if(this.seconds == 0) {
            if(this.minutes ==0) {
                this.timerCompleto();
                return;
            }
            this.seconds = 59;
            this.minutes--;        
        } else {
            this.seconds--;
        } 
        this.updateDom();
    },
    timerCompleto: function(){
        this.started = false;
        const audio = new Audio('./1x/BirdsNotification.mp3');
        audio.play();
    },
    closeModal: function(){
        document.querySelector("#modal1").style.display = 'none';
    },
    openModal: function(){
        document.querySelector("#modal1").style.display = 'block';
    },
    saveSettings: function(studyMin, shMins, lnMins){
        this.workMinutes = studyMin;
        this.sbreakMinutes = shMins;
        this.lbreakMinutes = lnMins;
        document.querySelector("#modal1").style.display = 'none';
        if(document.querySelector("#work").style.backgroundColor != 'transparent'){
            this.startWork(this.workMinutes, 0, true);
        }else if(document.querySelector("#break").style.backgroundColor != 'transparent'){
            this.startBreak(this.sbreakMinutes, 0, true);
        }else if (document.querySelector("#longbreak").style.backgroundColor != 'transparent'){
            this.startLongBreak(this.lbreakMinutes, 0, true);
        }
        
    }
};
window.onload = function() {
study.init();
}