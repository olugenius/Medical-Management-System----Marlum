


// Upload with Submit Button
/*
function upload() 
{
	$("#upload_picture_form").vPB({
		url: 'profile_picture_upload.php',
		beforeSubmit: function() 
		{
			$("#vpb_main").hide();
			$("#vpb_fake").show();
			$("#upload_status").show();
			$("#upload_status").html('');
			$("#upload_status").html('<div style="font-family: Verdana, Geneva, sans-serif; font-size:12px; color:black;" align="center">Upload <img src="images/loadings.gif" align="absmiddle" alt="Upload...." title="Upload...."/></div><br clear="all">');
		},
		success: function(response) 
		{
			$("#vpb_fake").hide();
			$("#vpb_main").show();
			$("#upload_status").hide().fadeIn('slow').html(response);
			$('#upload_picture').val('');
		}
	}).submit();  
}
*/

//Automatic Upload without submit button 
$(document).ready(function upload() 
{
				$("#Enter_without_upload").show();
	$("#upload_status").html('<img src="images/student_avatar.jpg" height="120" width="150" align="absmiddle" alt="Default Image" title="Default Image" style="display:inline; border:6px solid #E2E2E2;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;"/><br clear="all"/>');
	$('#upload_picture').live('change', function() 
	{
		$("#upload_picture_form").vPB({
			url: 'profile_picture_upload.php',
			beforeSubmit: function() 
			{
				$("#upload_status").show();
				$("#upload_status").html('<div style="font-family: Verdana, Geneva, sans-serif; font-size:12px; color:black;" align="center">Uploading... <img src="images/loadings.gif" align="absmiddle" alt="Uploading...." title="Uploading...."/></div><br clear="all">');
			},
			success: function(response) 
			{
				$("#upload_status").hide().fadeIn('slow').html(response);
				$("#Enter_without_upload").hide();
			}
		}).submit();
	});          
}); 