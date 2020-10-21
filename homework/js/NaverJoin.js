function func01(){
	selectFunc();
	hoverFunc();
	clickIcon();
	setRegex();
}

function selectFunc(){
	var inMonth = '<option selected>월</option>';
	for(var i = 0 ; i<12 ; i++){
		inMonth += ' <option>'+(i+1)+'</option>';
	}
	document.getElementById('month').innerHTML = inMonth;
	
	var inGen = '<option selected>성별</option><option>남자</option>'+
				'<option>여자</option><option>선택안함</option>';
	document.getElementById('gen').innerHTML = inGen;
	
	var inNation = '<option selected>대한민국 +82</option><option>트리니다드토바고 +1 868</option>'+
				'<option>팔레스타인 +970</option><option>괌 +1 671</option>';
				
	document.getElementById('nation').innerHTML = inNation;		
}

function hoverFunc(){
	document.getElementById('pw').onfocus = function(){
		document.getElementById('')
		document.getElementById('idbox').style.borderColor="#03C75A";
	}
	document.getElementById('pw').onblur = function(){
		document.getElementById('')
		document.getElementById('idbox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('rpw').onfocus = function(){
		document.getElementById('')
		document.getElementById('rpwbox').style.borderColor="#03C75A";
	}
	document.getElementById('rpw').onblur = function(){
		document.getElementById('')
		document.getElementById('rpwbox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('name').onfocus = function(){
		document.getElementById('')
		document.getElementById('namebox').style.borderColor="#03C75A";
	}
	document.getElementById('name').onblur = function(){
		document.getElementById('')
		document.getElementById('namebox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('month').onfocus = function(){
		document.getElementById('')
		document.getElementById('monthbox').style.borderColor="#03C75A";
	}
	document.getElementById('month').onblur = function(){
		document.getElementById('')
		document.getElementById('monthbox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('year').onfocus = function(){
		document.getElementById('')
		document.getElementById('yearbox').style.borderColor="#03C75A";
	}
	document.getElementById('year').onblur = function(){
		document.getElementById('')
		document.getElementById('yearbox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('day').onfocus = function(){
		document.getElementById('')
		document.getElementById('daybox').style.borderColor="#03C75A";
	}
	document.getElementById('day').onblur = function(){
		document.getElementById('')
		document.getElementById('daybox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('gen').onfocus = function(){
		document.getElementById('')
		document.getElementById('genbox').style.borderColor="#03C75A";
	}
	document.getElementById('gen').onblur = function(){
		document.getElementById('')
		document.getElementById('genbox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('nation').onfocus = function(){
		document.getElementById('')
		document.getElementById('nationbox').style.borderColor="#03C75A";
	}
	document.getElementById('nation').onblur = function(){
		document.getElementById('')
		document.getElementById('nationbox').style.borderColor="rgb(142, 142, 142)";
	}
	document.getElementById('number').onfocus = function(){
		document.getElementById('')
		document.getElementById('numberbox').style.borderColor="#03C75A";
	}
	document.getElementById('number').onblur = function(){
		document.getElementById('')
		document.getElementById('numberbox').style.borderColor="rgb(142, 142, 142)";
	}
	
}

function clickIcon(){
	document.getElementById('mailadrr').onclick = function(){
		document.getElementById('id').focus();
	}
	document.getElementById('login_pw-icorn').onclick = function(){
		document.getElementById('pw').focus();
	}
	document.getElementById('login_rpw-icorn').onclick = function(){
		document.getElementById('rpw').focus();
	}
}

function setRegex(){
		document.getElementById('id').onchange = function(){
			var idval = document.getElementById('id').value;
			var idPattern = /^[A-Za-z0-9_]([-_\.]?[0-9a-zA-Z])*$/;
			var result = idPattern.test(idval);
			
			var tag = document.getElementById('login_id_check');
			
			if(result){
				tag.style='color: green';
				tag.innerText='멋진 아이디네요!';
			}else{
				tag.style='color: red';
				tag.innerText='필수 정보입니다.';
			}
		}
		document.getElementById('pw').onchange = function(){
			var pval = document.getElementById('pw').value;
			var pPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/

			var result = pPattern.test(pval);
			
			var tag = document.getElementById('login_pw_check');
			
			if(result){
			}else{
				tag.style='color: red';
				tag.innerText='8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
			}
		}
		document.getElementById('rpw').onchange = function(){
			var pval = document.getElementById('pw').value;
			var rpw = document.getElementById('rpw').value;
			var tag = document.getElementById('login_rpw_check');
			if(rpw == pval){
			}else{
				tag.style='color: red';
				tag.innerText='비밀번호가 일치하지 않습니다.';
			}
		}
}