/**
 * Created by feili on 2016/10/2.
 */

/**
 * code block fold and unfold with dblclick event
 */
document.body.onload = function(){
  var curCode = document.getElementsByClassName("highlight");
  for(var i=0; i<curcode.length; i++){="" var="" obj="curCode[i];" obj.ondblclick="function(){" objclass="this.className;" if(objclass.indexof("fold")="">-1){
        this.className=objClass.replace("fold","");
      }else{
        this.className=objClass+" fold";
      }
    }
  }
}
</curcode.length;>