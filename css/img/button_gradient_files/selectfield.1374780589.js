
function toggleSelectSubField(selectfield, subfield, f) {
	div = document.getElementById(subfield+"div");
	if (selectFieldRelevance[selectfield][subfield][f] == "yes" ) { div.style.display = "block"; }
	else { div.style.display = "none"; }
}

function fadeSizeField(sizeField, sizeFieldAuto) {
	textField = document.getElementById(sizeField);
	autoField = document.getElementById(sizeFieldAuto);
	if (autoField.value == "yes") { 
		textField.disabled = true; 
	} else { 
		textField.disabled = false; 
	}
	
}


function printSizeField(sizeField, sizeFieldAuto, sizeField_value, sizeFieldAuto_value, onChangeCallback, sizeFieldDesc) {
	var out = [];
	out.push('<tr id="'+sizeField+'div">');
	out.push('<td style="width: 200px;">');
	out.push('<span class="s6 b">'+sizeFieldDesc+':</span></td>');
	out.push('<td style="width: 250px; text-align: left;">');
	out.push('<input type="text" size="4" name="'+sizeField+'" id="'+sizeField+'" value="'+sizeField_value+'" '+(onChangeCallback ? "onchange='"+onChangeCallback+"();'" : "")+'> &nbsp;&nbsp;&nbsp;&nbsp;');
				
	if (sizeFieldAuto) {
		out.push('<select id="'+sizeFieldAuto+'" name="'+sizeFieldAuto+'" onchange="fadeSizeField(\''+sizeField+'\', \''+sizeFieldAuto+'\'); '+(onChangeCallback ? onChangeCallback+"();" : "")+'">');
		out.push('<option value="yes" '+(sizeFieldAuto_value=="yes" ? "selected":"")+'>Auto</option>');
		out.push('<option value="no" '+(sizeFieldAuto_value=="no" ? "selected":"")+'>Manual</option>');
		out.push('</select>');
		out.push('<script language="JavaScript" type="text/javascript">');
		out.push('fadeSizeField("'+sizeField+'", "'+sizeFieldAuto+'"); ');
		out.push('</script>');
	}
	out.push('</td></tr>');
	document.write(out.join(""));
}


function toggleInlineField(formField, inlineField , f) {
	var div = document.getElementById(inlineField+"div");
	var ff = document.form[formField];
	if (!f) {
		for (var i=0; i < ff.length; i++) {
		   if (ff[i].checked) { var ffval = ff[i].value; }
		}
		f = ffval;
	}
	if (selectFieldRelevance[formField][inlineField][f] == "yes") { 
		div.style.visibility = "visible"; 
	} else { 
		div.style.visibility = "hidden"; 
	}
}