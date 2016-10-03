/**
 * Created by feili on 2016/10/2.
 */

/**
 * code block fold and unfold with dblclick event
 */
document.body.onload = function(){
  var curCode = document.getElementsByClassName("highlight");
  for(var i=0; i<curCode.length; i++){
    //add hightlight code class "hightight-customer"
    var obj = curCode[i];
    obj.className +=" hightight-customer";
    obj.ondblclick = function(){
      var objClass = this.className;
      if(objClass.indexOf("fold")>-1){
        this.className=objClass.replace("fold","");
      }else{
        this.className=objClass+" fold";
      }
    }
  }
}
