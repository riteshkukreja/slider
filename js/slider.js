var CSSslider = function(container, list) {

	'using strict';

	var control_item = ['&#9001;', '&#9002;'];
	var target;

	var image = function(item) {
		if(typeof item == 'string') {
			var img = $("<img />", {
				src: item
			});
		} else if( typeof item == 'object') {
			var img = $("<img />", {
				src: item.src,
				alt: item.alt
			});
		}

		return img;
	}

	var controls = function(className, item) {
		var span = $("<span />", {
			html: item,
			class: className
		});

		return span;
	}

	var holder = function() {
		var div = $("<div />", {
			class: 'cycle-slideshow'
		});

		target = div;

		div.append(controls('cycle-prev', control_item[0]));
		div.append(controls('cycle-next', control_item[1]));
		div.append(controls('cycle-pager', ''));

		if (typeof list != undefined) {
			/* Add Images */
			for (i = 0; i < list.length; i++) {
				div.append(image(list[i]));
			}
		}

		$(container).append(div);
	}

	this.add = function(item) {
		target.append(image(item));
		return this;
	}

	if (typeof container == 'string')
		holder();

}