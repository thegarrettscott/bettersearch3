var insertText=localStorage.getItem("insertText"),insertTypeaheadText=localStorage.getItem("insertTypeaheadText"),showPreviewText=localStorage.getItem("showPreviewText"),removeText=localStorage.getItem("removeText"),replacementText=localStorage.getItem("replacementText"),removeTab=localStorage.getItem("removeTab"),removeUpArrow=localStorage.getItem("removeUpArrow"),removeDownArrow=localStorage.getItem("removeDownArrow");if(removeUpArrow){let e=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,t=document.createEvent("Event");t.initEvent("keydown",!0,!0),t.keyCode=40,e.dispatchEvent(t)}if(removeDownArrow){let n=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,r=document.createEvent("Event");r.initEvent("keydown",!0,!0),r.keyCode=38,n.dispatchEvent(r)}if(removeTab){let o=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,a=document.createEvent("Event");a.initEvent("keydown",!0,!0),a.keyCode=8,o.dispatchEvent(a)}if(replacementText){let c=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,l=document.createEvent("Event");l.initEvent("keydown",!0,!0),l.keyCode=8,c.dispatchEvent(l),setTimeout((()=>{replacementText=replacementText.split("");for(var e=0;e<replacementText.length;e++){triggerValueWrite(replacementText[e].charCodeAt(0))}}),200)}if(insertText){insertText=insertText.split("");for(var i=0;i<insertText.length;i++){triggerValueWrite(insertText[i].charCodeAt(0))}}if(insertTypeaheadText){const m=new DataTransfer;function dispatchPaste(e,t){m.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{clipboardData:m,bubbles:!0,cancelable:!0})),m.clearData()}try{const v=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement;if("textbox"===v.role)dispatchPaste(v,insertTypeaheadText.replace(/\s/g," "));else{console.log("contentDocument is not a textbox, so writing values"),insertTypeaheadText=insertTypeaheadText.split("");for(i=0;i<insertTypeaheadText.length;i++){triggerValueWrite(insertTypeaheadText[i].charCodeAt(0))}}}catch(s){console.log("error in dispatchPaste",s)}}if(showPreviewText)for(i=0;i<showPreviewText.length;i++){triggerValueWrite(showPreviewText[i].charCodeAt(0))}if(removeText)for(i=0;i<removeText.length;i++){let d=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,T=document.createEvent("Event");T.initEvent("keydown",!0,!0),T.keyCode=8,d.dispatchEvent(T)}function triggerValueWrite(e){let t=document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,n=document.createEvent("Event");10==e?(n.initEvent("keydown",!0,!0),n.keyCode=13,t.dispatchEvent(n)):(n.initEvent("keypress",!0,!0),n.keyCode=e,t.dispatchEvent(n))}localStorage.clear();