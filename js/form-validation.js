$(document).ready(function(){

	(function(){
		var formValidation = {
			isValid: true,

			init: function(){
				//вызов внутренних функций
				this._setUpListeners();
			},
			_setUpListeners: function(){
				$('#form').on('submit', formValidation.validateForm);
			},
			validateForm: function(event){
				event.preventDefault();
				console.log('Метод запущен');
				var form = $(this),
					inputs = form.find('input, textarea'),
					checkboxes = form.find('input:checkbox'),
					radios = form.find('input:radio'),
					valid = true;
				$.each(inputs, function(index, val){
					//проверка заполненности input
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.parents('.form_group'),
						label = formGroup.find('label').text().toLowerCase(),
						textError = "Вы не ввели " + label,
						tooltip = $('<span class="form__tooltip ">' + textError + '</span>')
						// console.log(formGroup);
					if ( value.lenght === 0 ){
						formGroup.addClass('error');
						tooltip.appendTo(formGroup);
						console.log(formGroup);
					}
				});

			}
		};
		formValidation.init();
	}());

});