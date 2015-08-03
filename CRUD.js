$(document).ready(function() {
	
	/* Main Function - Delete, Add, Hide, Show */
	
    $('.options').hide();
	
    $('#single-answer').on('click', function() {
        $('.options').hide();
    });
    
    $('#multiple-answer').on('click', function() {
		
        $('.options').show();
        var choiceNumber = 2;
		
        $('.add-choice').on('click', function(e) {
			
        e.preventDefault();
        choiceNumber++;
        var input = "";
			input += "<li class='list'>Choice #" + choiceNumber + "<input type='text' name='choice' id='choice'>";
			input += "<input type='image' src='cross108.png' class='icon-del' alt='Submit'></li>";
        $('.poll-list').append(input);
		});	
		
		$('ol').on('click', '.icon-del', function() {
        $(this).closest('.list').remove();
        choiceNumber -= 1;
        });	

	});
	
	/*  Add answers */
	
	$('.button-add').on('click', function() {
		
		var output = "<div class='inactive-form'>";
			output += "Question: <input type='text' name='quesion-answer' id='question-answer'>";
			output += "<input type='image' src='pencil117.png' class='icon-edit' alt='Submit'>";
			output += "<input type='image' src='cross108.png' class='icon-delete' alt='Submit'>";
			output += "<p class='order-p'> Answer: </p>";
			output += "</div>";
		$('.add-poll').append(output);
		
		$('.inactive-form').on('click', '.icon-delete', function() {
        $(this).closest('.inactive-form').remove();
        });
		
		
		$('.inactive-form').on('click', '.icon-edit', function(e) {

		e.preventDefault();
		//console.log('merge');
		var edit = "<div class='add-edit'>";;
            edit += "<strong>Question:</strong>";
            edit += "<input type='text' name='question'>";
			edit += "<br>";
            edit += "<label for='single-answer-edit'>";
            edit += "<strong>Answers:</strong>";
            edit += "<input type='radio' name='answer' id='single-answer-edit' class='radio-buttons' value='yes/no'>Yes/No form";
            edit += "</label>";
            edit += "<label for='multiple-answer-edit'>";
            edit += "<input type='radio' name='answer' id='multiple-answer-edit' class='radio-buttons' value='multiple'>Multiple choice form";
            edit += "</label>"; 
			edit += "<div class='options-edit'>";
            edit += "<ol class='poll-list-edit'>";
            edit += "<li class='list-edit'>Choice #1<input type='text' name='choice-edit'></li>";
            edit += "<li class='list-edit'>Choice #2<input type='text' name='choice' id='choice-edit'></li>"
            edit += "</ol>";
            edit += "<a href='#' class='add-choice-edit'>+ Add new choice </a>";	
            edit += "</div>";
            edit += "<div class=''></div>";
            edit += "<button type='button' name='buttonPoll' id='buttonPollEdit' class='button-edit'>Edit Poll</button>";
			edit += "<a href='#' class='cancel-edit'> Cancel </a>";
            edit +=	"</div>";
		$('.add-edit').append(output);
			
			
			/* Multiple Choices */
			
		$('.options-edit').hide();
	
    	$('#single-answer-edit').on('click', function() {
        $('.options').hide();
    	});
    
    	$('#multiple-answer-edit').on('click', function() {
		
        $('.options-edit').show();
        var choiceNumberEdit= 2;
		
        $('.add-choice-edit').on('click', function(e) {
			
        e.preventDefault();
        choiceNumberEdit++;
        var input = "";
			input += "<li class='list-edit'>Choice #" + choiceNumber + "<input type='text' name='choice' id='choice-edit'>";
			input += "<input type='image' src='cross108.png' class='icon-delete-edit' alt='Submit'></li>";
        $('.poll-list').append(input);
		});	
			
		$('ol').on('click', '.icon-delete-edit', function() {
        $(this).closest('.list-edit').remove();
        choiceNumberEdit -= 1;
        });
		
			});
		});
	});
	
});