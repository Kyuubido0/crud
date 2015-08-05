		$(document).ready(function() {

			/* Main Function - Delete, Add, Hide, Show, Multiple Choices, Remove Choices */

			var contentCancel = "";
			$('.options').hide();

			$('#single-answer').on('click', function() {
				$('.options').slideUp();
			});

			var choiceNumber = 2;
			var answerNumber = 2;

			$('#multiple-answer').on('click', function() {
				$('.options').slideDown();
				choiceNumber = 2;
				$('.add-choice').on('click', function(e) {
					e.preventDefault();
					choiceNumber++;
					var input = "";
					input += "<li class='list' style='display:none'>Choice #" + choiceNumber + "<input type='text' name='choice' id='choice" + choiceNumber + "'>";
					input += "<input type='image' src='cross108.png' class='icon-del' alt='Submit'></li>";
					//$('.poll-list').append(input);
					$(input).appendTo('.poll-list').show('slow');
				});	

				answerNumber = choiceNumber;
				$('ol').on('click', '.icon-del', function() {
					$(this).closest('.list').slideUp('slow', function(){ 
						$(this).closest('.list').remove(); 
					});
					choiceNumber -= 1;
				});	
			});

			/*  Add answers when Button Add clicked and create inactive form and delete the inactive form*/

			$('.button-add').on('click', function() {

				var output = "<div class='inactive-form'>";
				output += "<strong class='strong-display'>Question:</strong>";
				output += "<div class='questionToAnswer' id='questionToAnswer' style='clear:none;'>" + document.getElementById('txtQuestion').value + "</div>";
				output += "<div class='controls'><input type='image' src='pencil117.png' class='icon-edit' alt='Submit'>";
				output += "<input type='image' src='cross108.png' class='icon-delete' alt='Submit'></div>";
				output += "<br>";
				output += "<strong class='strong-display'>Answer:</strong> <div id='txtAnswers'>";

				if(document.getElementById('single-answer').checked) {
					output += "Yes / No</div>";
				}
				else if(document.getElementById('multiple-answer').checked) {
					for(var k = 1;k <= choiceNumber; k++) {
						output += "<div id='answer" + k + "'>" + document.getElementById('choice' + k).value + "</div>";
					}
					output += "</div>";
				}
				output += "</p></div>";
				$('.add-poll').append(output);
			});

			$('.wrapper').on('click', '.icon-delete', function() {
				$(this).closest('.inactive-form').remove();
			});

			/* When edit button clicked, the Edit form appears and the inactive forms hides but keeps the values active*/

			$('.wrapper').on('click', '.icon-edit', function() {

				contentCancel = $(this).closest('.inactive-form').html();
				var edit = "";
				edit += '<input type="text" name="questionEdit" id="txtQuestionEdit" value="'+ $(this).closest('.inactive-form').find('#questionToAnswer').text() +'">';
				var multi = "";
				var ans = "";
				ans += '<label for="editsingle-answer">';
				ans += '<input type="radio" name="answer" id="editsingle-answer" class="radio-buttons" value="yes/no">Yes/No form';
				ans += '</label>';
				ans += '<br>';
				ans += '<label for="editmultiple-answer">';
				ans += '<input type="radio" name="answer" id="editmultiple-answer" class="radio-buttons" value="multiple">Multiple choice form';
				ans += '</label>';
				ans += '<div class="editoptions" style="display:none;">';
				ans += '<ol class="editpoll-list">';

				if($(this).closest('.inactive-form').find('#txtAnswers').text()!="Yes / No") {
					for(var k = 1;k <= choiceNumber; k++) {
						multi += '<label> Choice #'+k+' </label> <input type="text" id="editAns' + k + '" value="'+ $(this).closest('.inactive-form').find('#answer'+k).text() +'"><br />';
					}
				}

				if(multi == "") {
					ans += '<label> Choice # </label> <input type="text" id="editAns1"> <br/>';
					ans += '<label> Choice # </label> <input type="text" id="editAns2"> <br/>';
				}
				else {
					ans += multi;
				}
				ans += '</ol>';
				ans += '<a href="#" class="editadd-choice"> + Add new choice</a>';
				ans += '</div>';

				$(this).closest('.inactive-form').find('#questionToAnswer').html(edit);

				$(this).closest('.inactive-form').find('#txtAnswers').html(ans);

				$('#editmultiple-answer').on('click', function() {
					$('.editoptions').slideDown();
				});

				$('#editsingle-answer').on('click', function() {
					$('.editoptions').slideUp();
				});
				var ansNumb = k-1;
				$('.editadd-choice').on('click', function(e) {

					e.preventDefault();
					ansNumb++;
					var input = "";
					input += '<ol class="poll-list-describe" style="display:none"><li class="list"><label> Choice #'+ansNumb+' </label> <input type="text" id="editAns'+ ansNumb +'">';
					input += "<input type='image' src='cross108.png' class='icon-del' alt='Submit'></li></ol>";
					$(input).appendTo('.editpoll-list').slideDown();
				});

				$('ol').on('click', '.icon-del', function() {
					$(this).closest('.list').remove();
					ansNumb -= 1;
				});	

				$(this).closest('.inactive-form').append('<button type="button" id="editPoll" class="button-add">Edit Poll</button> <a href="#" id="btnCancel" style="margin-left: 20px">Cancel</a>');

						/* Edit poll look with the delete button and cancel */

						$('#editPoll').on('click', function() {
							var output = "<div class='inactive-form'>";
							output += "<strong class='strong-display'> Question: </strong><div class='questionToAnswer' id='questionToAnswer' style='clear:none;'>" + document.getElementById('txtQuestionEdit').value + "</div>";
							output += "<div class='controls'><input type='image' src='pencil117.png' class='icon-edit' alt='Submit'>";
							output += "<input type='image' src='cross108.png' class='icon-delete' alt='Submit'></div><br>";
							output += "<strong class='strong-display'> Answer: </strong><div id='txtAnswers'>";
							if(document.getElementById('editsingle-answer').checked) {
								output += "Yes / No</div>";
							}
							else if(document.getElementById('editmultiple-answer').checked) {
								for(var k = 1;k <= ansNumb;k ++) {
									output += "<div id='answer" + k + "'>" + document.getElementById('editAns' + k).value + "</div>";
								}
								output +="</div>";
							}
							output += "</p></div>";
							$('.add-poll').append(output);
							$(this).closest('.inactive-form').remove();
						});

				$('#btnCancel').on('click', function() {
					$(this).closest('.inactive-form').remove();
					var output = "<div class='inactive-form'>";
					output += contentCancel;
					output += "</div>";
					$('.add-poll').append(output);
				});		
			});	
		});