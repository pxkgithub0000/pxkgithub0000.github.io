$(function() {
					
				var a_idx = 0,
					b_idx = 0;
				c_idx = 0;
				jQuery(document).ready(function($) {
					$("body").click(function(e) {
						var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"),
							b = new Array("#09ebfc", "#ff6651", "#ffb351", "#51ff65", "#5197ff", "#a551ff", "#ff51f7", "#ff518e",
								"#ff5163", "#efff51"),
							c = new Array("12", "14", "16", "18", "20", "22", "24", "26", "28", "30");
						var $i = $("<span/>").text(a[a_idx]);
						a_idx = (a_idx + 1) % a.length;
						b_idx = (b_idx + 1) % b.length;
						c_idx = (c_idx + 1) % c.length;
						var x = e.pageX,
							y = e.pageY;
						$i.css({
							"z-index": 999,
							"top": y - 20,
							"left": x,
							"position": "absolute",
							"font-weight": "bold",
							"font-size": c[c_idx] + "px",
							"color": b[b_idx]
						});
						$("body").append($i);
						$i.animate({
							"top": y - 180,
							"opacity": 0
						}, 1500, function() {
							$i.remove();
						});
					});
				});
				var _hmt = _hmt || [];
			})
					
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?2d80bf3e88e8416ea42cc8cc6b942bf4";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();