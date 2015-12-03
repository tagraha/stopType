/* global window: true, 
   document: true, 
   setTimeout: true, 
   alert: true, 
   clearTimeout: true, 
   element_: true, 
   foo: true; */

;(function( window ){
  
  var typingTimer;
  var doneTypingInterval = 700;  
  
  
  function Stoptype(){}

  Stoptype.prototype.detectFinishTyping = function(elem, callBack){
    
    document.getElementById(elem).addEventListener('keyup', function(){
    
      clearTimeout(typingTimer);
        typingTimer = setTimeout(
          function(){
            callBack();
          }, doneTypingInterval
        );
      
    }, false);
    
  };
  
  window.Stoptype = Stoptype;
  
})(window);