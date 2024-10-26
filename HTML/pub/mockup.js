function loadingBarStart() {
	$('body').append('<div class="pub-loader"><div></div></div>');
	$('.pub-loader').show();
} loadingBarStart();
function loadingBarEnd() {
	$('.pub-loader').remove();
}

setTimeout(function() {
	/* INDEX */
	if ($('.pub-wrap').attr('data-layout') === 'index') {
		markupLayout();
		markupList();

		//Guide Markup Layout
		function markupLayout() {
			var $pub_index_site='<div class="pub-content">';
				$pub_index_site += '</div>';
			$('.pub-page').append($pub_index_site);
		}

		//Guide Markup List Rander
		function markupList() {
			var $pub_index_list='';
			for(var i=0; i<$pub_index_data.length; i++) {
				var $count=$pub_index_data[i].COUNT,
					$depth1Name=$pub_index_data[i].DEP1.replace(/ /gi,"").replace(/[/]/gi, 'ㆍ').replace(/[(]/gi, '！').replace(/[)]/gi, '？');
					$depth2Name=$pub_index_data[i].DEP2,
					$depth3Name=$pub_index_data[i].DEP3,
					$depth4Name=$pub_index_data[i].DEP4,
					$depth5Name=$pub_index_data[i].DEP5,
					$depth6Name=$pub_index_data[i].DEP6,
					$screen=$pub_index_data[i].SCREEN,
					$type=$pub_index_data[i].TYPE,
					$url=$pub_index_data[i].URL,
					$id=$pub_index_data[i].ID,
					$planner=$pub_index_data[i].PLA,
					$designer=$pub_index_data[i].DGN,
					$publisher=$pub_index_data[i].PUB,
					$developer=$pub_index_data[i].DEV,
					$status=$pub_index_data[i].STATUS,
					$wbs=$pub_index_data[i].WBS,
					$end=$pub_index_data[i].END,
					$modify=$pub_index_data[i].MODIFY.replace(/\[/g, '<li><p>').replace(/\]/g, '</p></li>'),
					$note=$pub_index_data[i].NOTE,
					$sb=$pub_index_data[i].SB;

				var $pub_index_site='';
					if ($count!=0) $pub_index_site += '<div class="pub-site">';
					else $pub_index_site += '<div class="pub-site nocount">';
						$pub_index_site += '<div class="pub-site-title">';
							$pub_index_site += '<h2>';
								$pub_index_site += '<span>'+ $depth1Name +'</span><div class="pub-progress"></div>';
							$pub_index_site += '</h2>';
						$pub_index_site += '</div>';
						$pub_index_site += '<div class="pub-table" id="index_'+ $depth1Name +'">';
							$pub_index_site += '<div class="pub-thead">';
								$pub_index_site += '<table>';
									$pub_index_site += '<colgroup><col class="no"><col class="dep2"><col class="dep3"><col class="dep4"><col class="dep5"><col class="dep6"><col class="screen"><col class="type"><col class="url"><col class="id"><col class="publisher"><col class="designer"><col class="planner"><col class="developer"><col class="wbs"><col class="status"><col class="modify"><col class="note"></colgroup>';
									$pub_index_site += '<thead>';
									$pub_index_site += '</thead>';
								$pub_index_site += '</table>';
							$pub_index_site += '</div>';
							$pub_index_site += '<div class="pub-tbody">';
								$pub_index_site += '<table>';
									$pub_index_site += '<colgroup><col class="no"><col class="dep2"><col class="dep3"><col class="dep4"><col class="dep5"><col class="dep6"><col class="screen"><col class="type"><col class="url"><col class="id"><col class="publisher"><col class="designer"><col class="planner"><col class="developer"><col class="wbs"><col class="status"><col class="modify"><col class="note"></colgroup>';
									$pub_index_site += '<tbody>';
									$pub_index_site += '</tbody>';
								$pub_index_site += '</table>';
							$pub_index_site += '</div>';
						$pub_index_site += '</div>';
					$pub_index_site += '</div>';

				var $pub_index_thead='';
					$pub_index_thead += '<tr>';
						$pub_index_thead += '<th class="no">번호</th>';
						$pub_index_thead += '<th class="dep2"><select><option selected>D2</option></select></th>';
						$pub_index_thead += '<th class="dep3"><select><option selected>D3</option></select></th>';
						$pub_index_thead += '<th class="dep4"><select><option selected>D4</option></select></th>';
						$pub_index_thead += '<th class="dep5"><select><option selected>D5</option></select></th>';
						$pub_index_thead += '<th class="dep6"><select><option selected>D6</option></select></th>';
						$pub_index_thead += '<th class="screen">화면명</th>';
						$pub_index_thead += '<th class="type">유형</th>';
						$pub_index_thead += '<th class="url">URL</th>';
						$pub_index_thead += '<th class="id">화면ID</th>';
						$pub_index_thead += '<th class="planner">기획</th>';
						$pub_index_thead += '<th class="designer">디자인</th>';
						$pub_index_thead += '<th class="publisher">퍼블</th>';
						$pub_index_thead += '<th class="developer">개발</th>';
						$pub_index_thead += '<th class="wbs">완료예정일</th>';
						$pub_index_thead += '<th class="status">최종완료일</th>';
						$pub_index_thead += '<th class="modify">수정이력</th>';
						$pub_index_thead += '<th class="note">비고</th>';
					$pub_index_thead += '</tr>';

				var $pub_index_tbody='';
					if ($sb.length) $pub_index_tbody += '<tr data-sb="'+ $sb +'" class="';
					else $pub_index_tbody += '<tr class="';
					if ($count==2) $pub_index_tbody += 'unscheduled ';
					if ($count.indexOf('0')==-1 && $status.indexOf('2')==-1 && $status.indexOf('3')==-1 && $status.indexOf('4')==-1 && $status.indexOf('0')==-1 && $end.indexOf('-')==-1)  $pub_index_tbody += 'wait';
					if (chk !== '0') {
						if ($count.indexOf('0')==-1 && $status.indexOf('2')!=-1 && $end.indexOf('-')==-1)  $pub_index_tbody += 'ing';
						if ($count.indexOf('0')==-1 && $status.indexOf('3')!=-1 && $end.indexOf('-')==-1) $pub_index_tbody += ' check';
						if ($count.indexOf('0')==-1 && $status.indexOf('4')!=-1 && $end.indexOf('-')==-1) $pub_index_tbody += ' check re';
					} else {
						if ($count.indexOf('0')==-1 && $status.indexOf('2')!=-1 && $end.indexOf('-')==-1)  $pub_index_tbody += 'ing';
						if ($count.indexOf('0')==-1 && $status.indexOf('3')!=-1 && $end.indexOf('-')==-1) $pub_index_tbody += 'ing';
						if ($count.indexOf('0')==-1 && $status.indexOf('4')!=-1 && $end.indexOf('-')==-1) $pub_index_tbody += 'ing';
					}
					if ($count.indexOf('0')==-1 && $end.indexOf('-')!=-1) $pub_index_tbody += 'end';
					if ($status.indexOf('0')!=-1 && $end.indexOf('-')==-1) $pub_index_tbody += 'del';
					if ($status.indexOf('0')!=-1 && $end.indexOf('-')!=-1) $pub_index_tbody += ' del';
					if ($end.indexOf('-')!=-1) $status = $end.replace(/[가-힣a-zA-Z\s]|[\{\}\[\]\/?.,;:|\)*~`!^\_+<>@\#$%&\\\=\(\'\"]/gi, '');
					$pub_index_tbody += '">';
						$pub_index_tbody += '<td class="dep2"><span>'+ $depth2Name +'</span></td>';
						$pub_index_tbody += '<td class="dep3"><span>'+ $depth3Name +'</span></td>';
						$pub_index_tbody += '<td class="dep4"><span>'+ $depth4Name +'</span></td>';
						$pub_index_tbody += '<td class="dep5"><span>'+ $depth5Name +'</span></td>';
						$pub_index_tbody += '<td class="dep6"><span>'+ $depth6Name +'</span></td>';
						$pub_index_tbody += '<td class="screen"><span>'+ $screen +'</span></td>';
						$pub_index_tbody += '<td class="type">'+ $type +'</td>';
						$pub_index_tbody += '<td class="url">'+ $url +'</td>';
						$pub_index_tbody += '<td class="id">'+ $id +'</td>';
						$pub_index_tbody += '<td class="planner">'+ $planner +'</td>';
						$pub_index_tbody += '<td class="designer">'+ $designer +'</td>';
						$pub_index_tbody += '<td class="publisher">'+ $publisher +'</td>';
						$pub_index_tbody += '<td class="developer">'+ $developer +'</td>';
						$pub_index_tbody += '<td class="wbs">'+ $wbs +'</td>';
						$pub_index_tbody += '<td class="status">'+ $status +'</td>';
						$pub_index_tbody += '<td class="modify"><ul>'+ $modify +'</ul></td>';
						$pub_index_tbody += '<td class="note">'+ $note +'</td>';
					$pub_index_tbody += '</tr>';

				if ($('.pub-content').find('#index_'+ $depth1Name).length==0) $('.pub-content').append($pub_index_site);
				$('#index_'+ $depth1Name).find('.pub-tbody tbody').append($pub_index_tbody);
			}
			$('.pub-content').append($pub_index_list);
			$('.pub-thead thead').append($pub_index_thead);
			$('.pub-site .pub-site-title h2 > span').each(function() {
				var $this=$(this);
				var	$text=$this.text().replace(/[ㆍ]/gi, '/').replace(/[！]/gi, '(').replace(/[？]/gi, ')');
				$this.html($text);
			});
		}

		$('.pub-page').after('<div class="pub-mobile-frame"><div class="pub-mobile-frame-inr"><div class="pub-device"><select><option value="375*667">iPhone 6/7/8</option><option value="375*812">iPhone 12 Mini</option><option value="390*844">iPhone 12 Pro</option><option value="360*740" selected="selected">Galaxy S8+</option><option value="280*653">Galaxy Fold</option></select></div><div class="pub-screen"><button type="button">&#8635;</button><div class="link"></div></div><div class="pub-iframe"></div><button type="button" class="pub-frame-toggle"><span>닫기</span></button></div></div><div class="pub-modify"></div>');
		$('.pub-wrap .pub-header .pub-title').after('<div class="pub-side"><div class="pub-side-inr"><div class="pub-total"></div><div class="pub-legend"><div class="pub-group"><button class="pub-refresh on" title="초기화">&#8634;</button><div class="pub-record"></div><div class="pub-search"><input type="text" placeholder="메뉴명"><button class="pub-search-btn"></button></div><button type="button" class="pub-viewer" aria-pressed="false"><span></span></button><button type="button" class="pub-toggle" aria-pressed="false"><span></span></button></div><ul class="pub-label"><li class="end"><div class="yesterday"><button type="button" title="전일완료"><em>전일</em></button></div><div class="only" title="개발 진행 가능(수정이력 제공)"><em>완료일자</em></div></li><li class="modify"><div class="yesterday"><button type="button" title="전일수정"><em>전일</em></button></div><div class="only" title="퍼블소스내 수정일자(YYYY-MM-DD) 검색"><em>수정일자</em></div></li><li class="history"><button type="button" class="pub-modify-open" disabled="disabled"><span></span></button></li></ul></div></div></div>');

		if (csv === '1') $('.pub-header .pub-label').append('<li class="csv"><button type="button" class="pub-csv-download"><span></span></button></li>');

		/* CONTENT */
		if (env !== '1') $('.pub-viewer, .pub-mobile-frame').remove();
		if (tab !== '0') $('.pub-tab-list').show();
		if (scn === '0') $('.pub-site .pub-table .screen').remove();
		if (wbs === '0') $('.pub-site .pub-table .wbs').remove();
		if (dgn === '0') $('.pub-site .pub-table .designer').remove();
		if (pla === '0') $('.pub-site .pub-table .planner').remove();
		if (dev === '0') $('.pub-site .pub-table .developer').remove();
		if (fin !== '0') $('.pub-wrap').addClass('fin');

		var $now = new Date();
		var $year = $now.getFullYear();
		var $month = String($now.getMonth() + 1).padStart(2, '0');
		var $day = String($now.getDate()).padStart(2, '0');

		var $nowDate = Number(`${$year}${$month}${$day}`);
		var $nowLastDay = new Date($year, $now.getMonth() + 1, 0).getDate();
		var $nowLastDate = Number(`${$year}${$month}${$nowLastDay}`);

		var $prevMonIndex = $now.getMonth() === 0 ? 11 : $now.getMonth() - 1;
		var $prevMon = String($prevMonIndex + 1).padStart(2, '0');
		var $prevLastDay = new Date($year, $prevMonIndex + 1, 0).getDate();
		var $prevLastDate = Number(`${$year}${$prevMon}${$prevLastDay}`);

		var $nextMonIndex = ($now.getMonth() + 1) % 12;
		var $nextMon = String($nextMonIndex + 1).padStart(2, '0');
		var $nextFirstDate = Number(`${$year}${$nextMon}01`);

		var $week = ['일', '월', '화', '수', '목', '금', '토'];
		var	$monday='월';
		var $dayOfWeek = $week[$now.getDay()];

		$('.pub-site .pub-table .pub-tbody tbody').each(function() {
			var $this=$(this).children('tr:not(.sb)');
			var	$count=$this.length;
			for (var i=0; i<=$count; i++) $this.eq(i).prepend('<td class="no"><span>'+(i+1)+'</span></td>');
		});

		//진행상태
		$('.pub-site .pub-table .pub-tbody td.status').each(function() {
			var $this=$(this);
			var	$text=$this.text();
			var	$date=Number($text.replace(/-/g,''));
			if ($this.html()!='' && !$this.closest('tr').hasClass('ing')) $this.html('<em><span>'+$text+'</span></em>');
			if (!$this.closest('tr').hasClass('del')) {
				if ($date==$nowDate) $this.addClass('today');
				else if ($date>$nowDate) $this.addClass('after');
				else if ($date==$nowDate-1) $this.addClass('yesterday');
				else if ($day=='01' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $date==$nowDate-2) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $date==$nowDate-3) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate-1) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate-2) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='02' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='02' && $date==$prevLastDate-1) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='03' && $date==$prevLastDate) $this.addClass('yesterday');
				$.each(holiday, function(index, item) {
					var $item=item.replace(/\-/g, '');
					if ($item==$nowDate-1 && $date==$nowDate-2) $this.addClass('yesterday');
				});
			}
			if ($this.html()!='') {
				var $thisWeek=$week[new Date($text).getDay()];
				if ($thisWeek!=undefined) $this.find('span').parent().append('('+$thisWeek+')');
			}
		});

		//수정이력
		$('.pub-site .pub-table .pub-tbody td.modify li').each(function() {
			var $this=$(this);
			var $thisP=$(this).find('p');
			if ($this.parent().text()!='') {
				if ($thisP.text()!='') {
					var $text = $thisP.text();
					var $datePattern = /\d{4}-\d{2}-\d{2}/g;
					var	$spanStr = $text.match($datePattern);
					var $cleanedText = $text.replace($datePattern, '').trim();
					var $cleanedText = $cleanedText.replace(/\s+/g, ' ');
					var	$thisWeek = $week[new Date($spanStr).getDay()];
	
					var list = $this.parent();
					var itemsArray = Array.from(list.children());
					function extractDate(itemText) {
						var match = itemText.match($datePattern);
						if (match) return new Date(match[0]);
						return null;
					}
					itemsArray.sort(function(a, b) {
						var dateA = extractDate(a.textContent);
						var dateB = extractDate(b.textContent);
						if (dateA && dateB) return dateB - dateA;
						return 0;
					});
					itemsArray.forEach(function(item) {
						list.append(item);
					});
	
					$thisP.html($cleanedText).before('<em><span>'+$spanStr+'</span></em>');
					$thisP.closest('li').attr('title', $cleanedText);
					$thisP.prev().append('('+$thisWeek+')');
				} else {
					$this.remove();
				}
			} else {
				$this.closest('ul').remove();
			}

			var $span=$this.find('span');
			var	$spanText=$span.text();
			var	$date=Number($spanText.replace(/-/g,''));
			if (!$this.closest('tr').hasClass('del')) {
				if ($date==$nowDate) $this.addClass('today');
				else if ($date>$nowDate) $this.addClass('after');
				else if ($date==$nowDate-1) $this.addClass('yesterday');
				else if ($day=='01' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $date==$nowDate-2) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $date==$nowDate-3) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate-1) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate-2) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='02' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='02' && $date==$prevLastDate-1) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='03' && $date==$prevLastDate) $this.addClass('yesterday');
				$.each(holiday, function(index, item) {
					var item=item.replace(/\-/g, '');
					if (item==$nowDate-1 && $date==$nowDate-2) $this.closest('li').addClass('yesterday');
				});
			}
		});

		var $depth='dep'+parseInt(dep);
		$('.pub-wrap .pub-table [class*=dep]').each(function() {
			if ($(this).hasClass($depth)) $(this).addClass('last');
			if ($(this).hasClass('last')) $(this).find('~ [class*=dep]').remove();
		});

		$('.pub-site .pub-table .pub-tbody tr').each(function() {
			var $this=$(this);
			var	$status=$this.find('td.status').text();
			if ($this.find('td.id').html()=='' && !$this.hasClass('del')) $this.removeClass('ing check end').addClass('wait');
			if ($this.hasClass('wait')) $(this).find('td.status').html('<em>대기</em>');
			if ($this.hasClass('check')) $(this).find('td.status').html('<em>검토중</em>');
			if ($this.hasClass('check re')) $(this).find('td.status').html('<em>재검토중</em>');
			if ($this.hasClass('ing')) $(this).find('td.status').html('<em>퍼블중</em>');
			if (($this.hasClass('del') && $status.indexOf('-')==-1) || ($this.closest('.pub-site').hasClass('nocount'))) $(this).find('td.status em').remove();
			if ($this.find('td.screen span').html()=='') $this.find('td.screen span').remove();
		});

		$('.pub-site .pub-table .pub-tbody td.modify').each(function() {
			var $this=$(this);
			if ($this.find('li').length>1) {
				$this.find('ul').before('<button type=\"button\" aria-pressed=\"false\"></button>');
				if (!$this.closest('.pub-table').find('.pub-thead th.modify button').length) $this.closest('.pub-table').find('.pub-thead th.modify').append('<button type=\"button\" aria-pressed=\"false\"></button>');
			}
		});
		$('.pub-site .pub-table .pub-tbody td.modify button').on('click', function() {
			if ($(this).attr('aria-pressed')=='false') $(this).attr('aria-pressed', 'true');
			else $(this).attr('aria-pressed', 'false');
		});
		$('.pub-site .pub-table .pub-thead th.modify button').on('click', function() {
			if ($(this).attr('aria-pressed')=='false') $(this).closest('.pub-table').find('.modify button').attr('aria-pressed', 'true');
			else $(this).closest('.pub-table').find('.modify button').attr('aria-pressed', 'false');
		});

		$('.pub-site .pub-table .pub-tbody tr[data-sb]').each(function() {
			var $this=$(this);
			var	$sb=$this.attr('data-sb');
			var	$colNum=$this.find('td:visible').length;
			$this.before('<tr class="sb"><td colspan="'+ $colNum +'"><p>'+ $sb +'</p></td></tr>').removeAttr('data-sb');
		});

		$('.pub-site .pub-table .pub-tbody td[class*="dep"] span').each(function() {
			var $this=$(this);
			if ($this.html()=='') $this.remove();
		});

		$('.pub-header .pub-record').each(function() {
			var $this=$(this);
			$this.append('<button type="button" aria-expanded="false"># 전체</button><div class="pub-option"><button type="button" data-value="optionAll" class="on"># 전체</button><div class="pub-option-inr"><div class="progress"></div><div class="compare"></div><div class="type"></div><div class="wbs"></div><div class="pub-team"></div></div></div>');
			if (wbs === '0') $this.find('.wbs').remove();
			if (fin === '1') $this.find('.wbs, .pub-team').remove();
		});

		$('.pub-wrap .pub-header .pub-total').each(function() {
			var $unscheduled=0, $url=0, $del=0, $status=0, $statusDel=0, $wait=0, $ing=0, $check=0, $check2=0, $endYesterday=0, $endYesterdayDel=0, $modifyYesterday=0, $modifyYesterdayDel=0;
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.etc').each(function() {
				if ($(this).length) $unscheduled++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr:not(.sb)').each(function() {
				if ($(this).length) $url++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.del').each(function() {
				if ($(this).length) $del++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody td.status').each(function() {
				if ($(this).html()!='') $status++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.del td.status').each(function() {
				if ($(this).html()!='') $statusDel++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.wait').each(function() {
				if ($(this).html()!='') $wait++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.ing:not(.check)').each(function() {
				if ($(this).html()!='') $ing++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.check').each(function() {
				if ($(this).html()!='') $check++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.check.re').each(function() {
				if ($(this).html()!='') $check2++;
			});
			$('.pub-site .pub-table .pub-tbody tr').each(function() {
				if ($(this).find('.status.yesterday').length>0) $endYesterday++;
			});
			$('.pub-site .pub-table .pub-tbody tr:not(.end)').each(function() {
				if ($(this).find('.status.yesterday').length>0) $endYesterdayDel++;
			});
			$('.pub-site .pub-table .pub-tbody tr').each(function() {
				if ($(this).find('.modify .yesterday').length>0) $modifyYesterday++;
			});
			$('.pub-site .pub-table .pub-tbody tr:not(.end)').each(function() {
				if ($(this).find('.modify .yesterday').length>0) $modifyYesterdayDel++;
			});
			$count1=($url)-($unscheduled);
			$count2=($status-$statusDel)-($wait)-($ing)-($check)-($unscheduled);
			$count3=($status-$statusDel)-($wait)-($ing)+($del)-($unscheduled);
			$count4=($wait);
			$count9=($del);
			$count5=($ing);
			$count6=($check)-($check2);
			$count7=($check2);
			$count8=($check);
			var $nanValue1=(($count2/$count1)*100).toFixed(1);
			var	$nanValue2=(($count3/$count1)*100).toFixed(1);
			var	$nanValue3=(($count4/$count1)*100).toFixed(1);
			var	$nanValue4=(($count5/$count1)*100).toFixed(1);
			var	$nanValue7=(($count8/$count1)*100).toFixed(1);
			if (isNaN($nanValue1)) $nanValue1=0;
			if (isNaN($nanValue2)) $nanValue2=0;
			if (isNaN($nanValue3)) $nanValue3=0;
			if (isNaN($nanValue4)) $nanValue4=0;

			//total & rate
			if (chk !== '0') $(this).prepend('<p><em>전체</em><strong>'+$count3+'<span><em>'+$del+'</em></span></strong><span>/</span><strong>'+$count1+'</span><span><em>'+$del+'</em></span></strong></p><p><em>진척률</em><span><strong>'+$nanValue2+'</strong>%</span><button type="button" class="pub-button-detail" aria-expanded="false" title="더보기"></button></p><ul class="pub-total-layer"><li class="end"><em>완료<span> (<strong>'+$count2+'</strong>)</span></em><span><strong>'+$nanValue1+'</strong>%</span></li><li class="check"><em>재/검토중<span> (<strong>'+$count8+'</strong>)</span></em><span><strong>'+$nanValue7+'</strong>%</span></li><li class="ing"><em>퍼블중<span> (<strong>'+$count5+'</strong>)</span></em><span><strong>'+$nanValue4+'</strong>%</span></li><li class="wait"><em>대기<span> (<strong>'+$count4+'</strong>)</span></em><span><strong>'+$nanValue3+'</strong>%</span></li><li class="del"><em>삭제<span> (<strong>'+$count9+'</strong>)</span></em><span><strong>'+$nanValue3+'</strong>%</span></li></ul>');
			else $(this).prepend('<p><em>전체</em><strong>'+$count3+'<span><em>'+$del+'</em></span></strong><span>/</span><strong>'+$count1+'</span><span><em>'+$del+'</em></span></strong></p><p><em>진척률</em><span><strong>'+$nanValue2+'</strong>%</span><button type="button" class="pub-button-detail" aria-expanded="false"></button></p><ul class="pub-total-layer"><li class="end"><em>완료<span> (<strong>'+$count2+'</strong>)</span></em><span><strong>'+$nanValue1+'</strong>%</span></li><li class="ing"><em>퍼블중<span> (<strong>'+$count5+'</strong>)</span></em><span><strong>'+$nanValue4+'</strong>%</span></li><li class="wait"><em>대기<span> (<strong>'+$count4+'</strong>)</span></em><span><strong>'+$nanValue3+'</strong>%</span></li><li class="del"><em>삭제<span> (<strong>'+$count9+'</strong>)</span></em><span><strong>'+$nanValue3+'</strong>%</span></li></ul>');

			//sorting
			$('.pub-header .pub-side .progress').append('<a href="javascript:void(0)" class="on"><strong>진행상태</strong></a><div class="pub-list" style="display:block;"><ul><li class="end"><button type="button" data-value="option1_1"><em>완료</em></button></li><li class="ing"><button type="button" data-value="option1_4"><em>퍼블중</em></button></li><li class="wait"><button type="button" data-value="option1_3"><em>대기</em></button></li><li><button type="button" data-value="option1_6"><em>삭제</em></button></li><li><button type="button" data-value="option1_10"><em>지연</em></button></li></ul></div>');
			if (wbs === '0') $('.pub-header .pub-record .pub-option .pub-list li:last-child').remove();
			if (chk !== '0') $('.pub-header .pub-record .pub-option li.ing').before('<li class="check"><button type="button" data-value="option1_5"><em>검토중</em></button></li><li class="check re"><button type="button" data-value="option1_7"><em>재검토중</em></button></li>');

			$('.pub-header .pub-side .progress button').each(function() {
				if ($(this).attr('data-value')=='option1_1') $(this).append(' <span>(<strong>'+($count2)+'</strong>)</span>'); //완료
				if ($(this).attr('data-value')=='option1_4') $(this).append(' <span>(<strong>'+($count5)+'</strong>)</span>'); //퍼블중
				if ($(this).attr('data-value')=='option1_5') $(this).append(' <span>(<strong>'+($count6)+'</strong>)</span>'); //검토중
				if ($(this).attr('data-value')=='option1_7') $(this).append(' <span>(<strong>'+($count7)+'</strong>)</span>'); //재검토중
				if ($(this).attr('data-value')=='option1_3') $(this).append(' <span>(<strong>'+($count4)+'</strong>)</span>'); //대기
				if ($(this).attr('data-value')=='option1_6') $(this).append(' <span>(<strong>'+($del)+'</strong>)</span>'); //삭제
			});
			$('.pub-header .pub-legend').each(function() {
				var $eYesterday=$endYesterday-$endYesterdayDel;
				var	$mYesterday=$modifyYesterday-$modifyYesterdayDel;
				if ($eYesterday!='0') $(this).find('li.end .yesterday em').append('<strong><span>'+$eYesterday+'</span></strong>');
				else $(this).find('li.end .yesterday button').attr('disabled', true);
				if ($mYesterday!='0') $(this).find('li.modify .yesterday em').append('<strong><span>'+$mYesterday+'</span></strong>');
				else $(this).find('li.modify .yesterday button').attr('disabled', true);

				if ($count8!='0') $(this).find('.pub-label').prepend('<li class="check"><button type="button"><em>재/검토중<strong><span>'+$count8+'</span></strong></em></button></li>');
			});
		});

		$('.pub-site:not(.nocount)').each(function() {
			$(this).find('.pub-site-title').append('<div class="pub-total"></div>');
			if (!$(this).hasClass('nocount')) {
				var $unscheduled=0, $url=0, $del=0, $status=0, $statusDel=0, $wait=0, $ing=0, $check=0, $check2=0;
				$(this).find('.pub-tbody tr.etc').each(function() {
					if ($(this).length) $unscheduled++;
				});
				$(this).find('.pub-tbody tr:not(.sb)').each(function() {
					if ($(this).length) $url++;
				});
				$(this).find('.pub-tbody tr.del').each(function() {
					if ($(this).length) $del++;
				});
				$(this).find('td.status').each(function() {
					if ($(this).html()!='') $status++;
				});
				$(this).find('tr.del td.status').each(function() {
					if ($(this).html()!='') $statusDel++;
				});
				$(this).find('tr.wait').each(function() {
					if ($(this).length) $wait++;
				});
				$(this).find('tr.ing:not(.check)').each(function() {
					if ($(this).length) $ing++;
				});
				$(this).find('tr.check').each(function() {
					if ($(this).length) $check++;
				});
				$(this).find('tr.check.re').each(function() {
					if ($(this).length) $check2++;
				});
				$count1=($url)-($unscheduled);
				$count2=($status-$statusDel)-($wait)-($ing)-($check)-($unscheduled);
				$count3=($status-$statusDel)-($wait)-($ing)+($del)-($unscheduled);
				$count4=($wait);
				$count9=($del);
				$count5=($ing);
				$count6=($check)-($check2);
				$count7=($check2);
				var $nanValue=(($count3)/$count1*100).toFixed(1);
				if (isNaN($nanValue)) $nanValue=0;

				//total
				if (chk !== '0') $(this).find('h2>span').after('<p><strong>'+$count3+'<span></span></strong><span>/</span><strong>'+$count1+'<span></span></strong><em>(<span class="end">완료</span><strong>'+$count2+'</strong>,<span class="check">재/검토중</span><strong>'+($count6+$count7)+'</strong><span class="ing">퍼블중</span><strong>'+$count5+'</strong>,<span class="wait">대기</span><strong>'+$count4+'</strong>,<span class="del">삭제</span><strong>'+$count9+'</strong>)</em></p>');
				else $(this).find('h2>span').after('<p><strong>'+$count3+'<span></span></strong><span>/</span><strong>'+$count1+'<span></span></strong><em>(<span class="end">완료</span><strong>'+$count2+'</strong>,<span class="ing">퍼블중</span><strong>'+$count5+'</strong>,<span class="wait">대기</span><strong>'+$count4+'</strong>,<span class="wait">삭제</span><strong>'+$count9+'</strong>)</em></p>');

				//rate
				$(this).find('.pub-site-title .pub-total').prepend('<p><em>진척률</em><span><strong>'+$nanValue+'</strong>%</span></p>');
				$(this).find('.pub-progress').append('<span style="width:'+$nanValue+'%"></span>');
			}
		});

		//타입
		var $types=new Array();
		$('.pub-site:not(.nocount) .pub-table .pub-tbody td.type').each(function(index, item) {
			var $this=$(this);
			var	$text=$this.text().toUpperCase();
			$types.push($(item).text().toUpperCase());
			if ($this.html()!='') $this.html('<span>'+$text+'</span>');
		});
		if ($types.length) {
			$('.pub-header .pub-side .type').append('<a href="javascript:void(0)"><strong>유형</strong></a><div class="pub-list"><ul></ul></div>');
			var $result=$types.sort().reduce((accu, curr) => {
				accu.set(curr, (accu.get(curr)||0)+1);
				return accu;
			}, new Map());
			for (let [key, value] of $result.entries()) {
				if (key.length) $('.pub-header .pub-side .type ul').append('<li><button type="button" data-value="optionType"><span>'+key+'</span> ('+value+')</button></li>');
				else $('.pub-header .pub-side .type ul').prepend('<li><button type="button" data-value="optionType">TBD ('+value+')</button></li>');
			}
		}
		$('.pub-header .pub-side .type li span').each(function() {
			var $this=$(this);
			var	$text=$this.text();
			if ($text === 'F') $this.after(' 메인');
			if ($text === 'T') $this.after(' 탭');
			if ($text === 'P') $this.after(' 팝업');
			if ($text === 'L') $this.after(' 링크');
			if ($text === 'CP') $this.after(' 센터팝업');
			if ($text === 'FP') $this.after(' 풀팝업');
			if ($text === 'BP') $this.after(' 바텀팝업');
		});

		//완료예정일
		var $schedule=new Array();
		$('.pub-site:not(.nocount) .pub-table .pub-tbody tr:not(.del, .check, .end) td.wbs').each(function(index, item) {
			var $this=$(this);
			var	$text=$this.text();
			var	$date=Number($text.replace(/-/g,''));
			$schedule.push($(item).text().replace(/-/g,''));
			if ($nowDate==$date && $date!=0) $this.addClass('hurry');
			if ($nowDate==$date-1 && $date!=0) $this.addClass('hurry');
			if ($nowDate==$nowLastDate && $date==$nextFirstDate && $date!=0) $this.addClass('hurry');
			if ($nowDate>$date && $date!=0) $this.addClass('delay');
		});
		if ($schedule.length) {
			$('.pub-header .pub-side .wbs').append('<a href="javascript:void(0)"><strong>완료예정일</strong></a><div class="pub-list"><ul></ul></div>');
			var $result=$schedule.sort(function(a,b) { return b-a }).reduce((accu, curr) => {
				accu.set(curr, (accu.get(curr)||0)+1);
				return accu;
			}, new Map());
			for (let [key, value] of $result.entries()) {
				if (key.length) {
					var $key=key.slice(0,4)+'-'+key.slice(4,6)+'-'+key.slice(6,8);
					$('.pub-header .pub-side .wbs ul').append('<li><button type="button" data-value="optionWbs"><span>'+$key+'</span> ('+value+')</button></li>');
				} else {
					$('.pub-header .pub-side .wbs ul').prepend('<li><button type="button" data-value="optionWbs">TBD ('+value+')</button></li>');
				}
			}
		}
		$('.pub-site:not(.nocount) .pub-table .pub-tbody tr td.wbs').each(function(index, item) {
			var $this=$(this);
			var	$text=$this.text();
			$this.html('<em><span>'+$text+'</span></em>');
			if ($this.find('span').html()!='') {
				var $thisWeek=$week[new Date($text).getDay()];
				$this.find('em').append('('+$thisWeek+')');
			}
		});
		$('.pub-header .pub-side .wbs span').each(function() {
			var $this=$(this);
			var	$date=$this.text().replace(/-/g,'');
			if ($date==$nowDate) $this.parent().addClass('today');
		});

		//작업자
		$('.pub-header .pub-side .pub-team').html('<a href="javascript:void(0)"><strong>작업자</strong></a><div class="pub-list"></div>');

		const works = ['publisher', 'designer', 'planner', 'developer'];
		const roleNames = {
			publisher: '퍼블',
			designer: '디자인',
			planner: '기획',
			developer: '개발'
		};

		works.forEach(type => {
			let dataArray = [];
			const names = {
				publishers: publishers,
				designers: designers,
				planners: planners,
				developers: developers
			};
			const name = names[type + 's'];
			if ($(`.pub-site .pub-table .pub-tbody td.${type}`).text().length) {
				const spanContent = name ? `<span>- ${name}(PL)</span>` : '';
				
				$('.pub-header .pub-side .pub-team .pub-list').append(`
					<div class="${type}">
						<em>${roleNames[type]} ${spanContent}</em>
						<ul></ul>
					</div>
				`);
			}

			$(`.pub-site:not(.nocount) .pub-table .pub-tbody td.${type}`).each(function() {
				const text = $(this).text().trim();
				dataArray.push(text);
				
				if (text.length) {
					$(this).html(`<span>${text}</span>`);
				}
			});

			const TBDCount = $(`.pub-site:not(.nocount) .pub-table .pub-tbody tr.del td.${type}`).filter(function() {
				return $(this).text().trim() === '';
			}).length;
			if (dataArray.length) {
				const result = dataArray.sort().reduce((accu, curr) => {
					accu.set(curr, (accu.get(curr) || 0) + 1);
					return accu;
				}, new Map());

				const $list = $(`.pub-header .pub-side .pub-team .pub-list div.${type} ul`);
				result.forEach((value, key) => {
					if (key.length) {
						$list.append(`<li><button type="button" data-value="option${type.charAt(0).toUpperCase() + type.slice(1)}"><span>${key}</span></button></li>`);
					} else {
						const adjustedValue = Math.max(0, value - TBDCount);
						$list.prepend(`<li><button type="button" data-value="option${type.charAt(0).toUpperCase() + type.slice(1)}">TBD (${adjustedValue})</button></li>`);
					}
				});
			}
		});

		if ($('.pub-header .pub-side .pub-team .pub-list>div').length!=1) $('.pub-header .pub-side .pub-team').addClass('on');

		//뎁스
		$('.pub-site').each(function() {
			var $this=$(this);
			for (var i=1; i<=dep+1; i++) {
				var $deps=new Array();
				$this.find('.pub-table .pub-tbody td.dep'+i+'').each(function(index, item) {
					var $depi=$(this);
					var	$text=$depi.text();
					var	$tr=$depi.closest('tr');
					if ($text.length && !$tr.hasClass('unscheduled')) {$deps.push($(item).text());}
				});
				if ($deps.length) {
					var $result=$deps.sort(function(a,b) { return b-a }).reduce((accu, curr) => {
						accu.set(curr, (accu.get(curr)||0)+1);
						return accu;
					}, new Map());
					for (let [key, value] of $result.entries()) {
						$this.find('.pub-table .pub-thead th.dep'+i+' select').append('<option value="'+key+'">'+key+' ('+value+')</option>');
					}
				}
			}
			$this.find('.pub-table .pub-thead th[class*="dep"] select').on('change', function(e) {
				resetSearch();
				resetRecord();
				resetLabel();
				var $option=$(this);
				var	$idx=$option.parent().index()+1;
				var	$value=$option.find('option:selected').attr('value');
				if ($option.find('option:first').prop('selected') === true) {
					$option.removeClass('on');
					$this.find('.pub-table .pub-tbody tr').css('display','');
				} else {
					$option.addClass('on').closest('th[class*="dep"]').siblings().find('select').removeClass('on').find('option:first').prop('selected', true);
					$this.find('.pub-table .pub-tbody tr').each(function() {
						if ($value===$(this).find('td.dep'+$idx+'').text()) $(this).css('display','');
						else $(this).hide();
					});
				}
				var $tbody=$option.closest('.pub-site').find('.pub-tbody');
				var $scrOffset=$tbody.offset();
				var $navH=$('.pub-header .pub-nav').outerHeight();
				var $titleH=$('.pub-site .pub-site-title').outerHeight();
				var $theadH=$('.pub-site .pub-table .pub-thead').outerHeight();
				var $sTop=$(document).scrollTop();
				if (($navH+$titleH+$theadH)<$scrOffset.top-$sTop) {
					$('html, body').animate({
						'scrollTop': $scrOffset.top - ($navH+$titleH+$theadH + 70) +'px'
					}, 100);
				} else {
					$('html, body').animate({
						'scrollTop': $scrOffset.top - (172) +'px'
					}, 100);
				}
			});
		});

		//ID
		$('.pub-site .pub-table .pub-tbody td.id').each(function() {
			var $id=$(this).text();
			var	$url=$(this).closest('tr').find('td.url').text();
			var	$path=window.location.href;
			if (ext === 'html') {
				if ($(this).closest('tr').find('td.url').html()=='') $path=$path.substring(0, $path.lastIndexOf($id));
				else $path='..'+$path.substring(0, $path.lastIndexOf($id));
			}
			if (ext === 'xml') $path=$path.substring(0, $path.lastIndexOf('=')+1);
			var $href=$path+$url+$id;
			if ($(this).html()!='') $(this).html('<a href="'+$href+'.'+ext+'" target="_blank"><strong>'+$id+'</strong></a>');
			$(this).find('a').on('click', function() {
				$('.pub-site .pub-table .pub-tbody td.id a').removeClass('active');
				$(this).addClass('active');
				//모바일뷰
				if ($('.pub-viewer').attr('aria-pressed')=='true') {
					if (!$('#isMobile').length) {
						$('.pub-mobile-frame .pub-screen .link').html('<a href="'+$href+'.'+ext+'" target="_blank"><strong>'+$id+'</strong></a>');
						mobileFrameAction();
						$('.pub-mobile-frame .pub-iframe').html('<iframe src="'+$href+'.'+ext+'" frameborder="0">');
						setTimeout(function() {
							$('.pub-mobile-frame .pub-iframe iframe').contents().find('head').append('<style>body::-webkit-scrollbar {width:0;height:0;}</style>');
						}, 50);
						return false;
					}
				}
			});
		});

		var $idArray1=[];
		$('.pub-site .pub-table .pub-tbody td.id a').each(function(index, item) {
			var $text = $(this).text();
			if ($.inArray($text, $idArray1)===-1) $idArray1.push($text);
			else $(this).closest('tr').addClass('overlap-id');
		});
		var $idArray2=[];
		$($('.pub-site .pub-table .pub-tbody td.id a').get().reverse()).each(function(index, item) {
			var $text = $(this).text();
			if ($.inArray($text, $idArray2)===-1) $idArray2.push($text);
			else $(this).closest('tr').addClass('overlap-id');
		});

		var $compareContainer = $('.pub-header .pub-side .compare');
		var $tableBody = $('.pub-site .pub-table .pub-tbody');
		var hasOverlapId = $tableBody.find('tr.overlap-id').length > 0;
		var hasSb = $tableBody.find('tr.sb').length > 0;
		if (hasOverlapId || hasSb) {
			$compareContainer.append(
				'<a href="javascript:void(0)"><strong>현행화</strong></a>' +
				'<div class="pub-list"><ul></ul></div>'
			);
			
			var $list = $compareContainer.find('ul');
			if (hasSb) {
				$list.append('<li><button type="button" data-value="optionSB">SB 버전</button></li>');
			}
			if (hasOverlapId) {
				$list.append('<li><button type="button" data-value="optionID">ID 중복</button></li>');
			}
		}

		//전일완료
		$('.pub-header .pub-label li.end .yesterday button').stop().on('click', function() {
			var $this=$(this);
			$('html,body').animate({scrollTop: 0}, 200);
			if (!$this.parent().hasClass('on')) {
				$('.pub-header .pub-label li.modify .yesterday.on button').click();
				$('.pub-header .pub-label li.check.on button').click();
				resetRecord();
				resetSearch();
				resetDepth();
				$this.parent().addClass('on');
				$('.pub-site .pub-table .pub-tbody tr').each(function() {
					if ($(this).find('td.status').hasClass('yesterday')) $(this).css('display','');
					else $(this).hide();
				});
			} else {
				$this.parent().removeClass('on');
				$('.pub-site .pub-table .pub-tbody tr').css('display','');
				$('.pub-header .pub-record .pub-option button.on').click();
			}
		});

		//전일수정
		$('.pub-header .pub-label li.modify .yesterday button').stop().on('click', function() {
			var $this=$(this);
			$('html,body').animate({scrollTop: 0}, 200);
			if (!$this.parent().hasClass('on')) {
				$('.pub-header .pub-label li.end .yesterday.on button').click();
				$('.pub-header .pub-label li.check.on button').click();
				resetRecord();
				resetSearch();
				resetDepth();
				$this.parent().addClass('on');
				$('.pub-site .pub-table .pub-tbody tr').each(function() {
					if ($(this).find('td.modify li').hasClass('yesterday')) {
						$(this).css('display','');
						$(this).find('td.modify li').hide();
						$(this).find('td.modify li.yesterday').show();
					} else {
						$(this).hide();
					}
				});
			} else {
				$this.parent().removeClass('on');
				$('.pub-site .pub-table .pub-tbody tr').css('display','');
				$('.pub-site .pub-table .pub-tbody tr').find('td.modify li').css('display','');
			}
		});

		//재/검토중
		$('.pub-header .pub-label li.check button').stop().on('click', function() {
			var $this=$(this);
			$('html,body').animate({scrollTop: 0}, 200);
			if (!$this.parent().hasClass('on')) {
				$('.pub-header .pub-label li .yesterday.on button').click();
				$('.pub-header .pub-record .pub-option > button').click();
				resetRecord();
				resetSearch();
				resetDepth();
				$this.parent().addClass('on');
				$('.pub-site .pub-table .pub-tbody tr').each(function() {
					if ($(this).hasClass('check')) $(this).css('display','');
					else $(this).hide();
				});
			} else {
				$this.parent().removeClass('on');
				$('.pub-site .pub-table .pub-tbody tr').css('display','');
				$('.pub-header .pub-record .pub-option button.on').click();
			}
		});

		$(document).on('click', '.pub-header .pub-record > button', function() {
			var $this=$(this);
			var	$spd=200;
			if ($this.attr('aria-expanded')=='false') {
				$this.attr('aria-expanded', 'true').next().show();
			} else {
				$this.attr('aria-expanded', 'false').next().slideUp($spd);
				setTimeout(function() {
					if ($('.pub-record .pub-option > button').hasClass('on')) {
						$('.pub-record a').removeClass('on').next().hide();
						$('.pub-record .progress a').addClass('on').next().show();
					} else {
						$('.pub-record button.on').closest('div').show().prev().addClass('on').parent().siblings().find('a.on').removeClass('on').next().hide();
					}
				}, $spd);
			}
		});

		$(document).stop().on('click', '.pub-header .pub-record .pub-option button', function() {
			resetSearch();
			resetDepth();
			resetLabel();
			var $this=$(this);
			var	$text=$this.text();
			var	$text2=$this.find('span').text();
			$('html,body').animate({scrollTop: 0}, 200);
			$('.pub-site .pub-table').parent().removeClass('fixed');
			$('.pub-record .pub-option button').removeClass('on');
			$(this).addClass('on').closest('.pub-option').slideUp(200).prev().attr('aria-expanded', 'false');
			if ($this.attr('data-value')=='optionAll') {
				$('.pub-header .pub-record>button').removeClass('on').html($text);
				$this.next('.pub-option-inr').find('button').removeClass('on');
				$this.next('.pub-option-inr').find('a').removeClass('on').next().hide();
				$this.next('.pub-option-inr').find('.progress a').addClass('on').next().show();
			} else {
				$('.pub-header .pub-record>button').addClass('on').html($text);
			}
			$('.pub-site .pub-table .pub-tbody tr').each(function() {
				if ($this.attr('data-value')=='optionAll') {
					$(this).css('display','');
				} else if ($this.attr('data-value')=='option1_1') { //완료
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('td.status').html()!='' && !$(this).hasClass('wait') && !$(this).hasClass('ing') && !$(this).hasClass('check') && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='option1_5') { //검토중
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('check') && !$(this).hasClass('re') && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='option1_7') { //재검토중
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('check') && $(this).hasClass('re') && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='option1_4') { //퍼블중
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('ing') && !$(this).hasClass('check') && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='option1_3') { //대기
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('wait') && !$(this).hasClass('check') && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='option1_6') { //삭제
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='option1_10') { //지연
					if (!$(this).closest('.pub-site').hasClass('nocount') && !$(this).hasClass('del') && $(this).find('.wbs').hasClass('delay') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionWbs') { //완료예정일
					if (!$(this).closest('.pub-site').hasClass('nocount') && !$(this).hasClass('del') && $(this).find('.wbs span').text()==$text2 || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionType') { //유형
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.type span').text()==$text2 && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionDesigner') { //디자인
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.designer span').text()==$text2 && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionPlanner') { //기획
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.planner span').text()==$text2 && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionDeveloper') { //개발
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.developer span').text()==$text2 && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionPublisher') { //퍼블
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.publisher span').text()==$text2 && !$(this).hasClass('del') || $(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionSB') { //스토리보드
					if ($(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if ($this.attr('data-value')=='optionID') { //ID중복
					if ($(this).hasClass('overlap-id')) $(this).css('display','');
					else $(this).hide();
				}
			});
		});
		$(document).on('click', '.pub-header .pub-record .pub-option a', function() {
			var $this=$(this);
			var	$spd=300;
			$this.addClass('on').next().slideDown($spd).parent().siblings().find('a').removeClass('on').next().slideUp($spd);
		});

		$('.pub-mobile-frame .pub-screen button').on('click', function() {
			$('.pub-mobile-frame iframe').attr('src', $('.pub-mobile-frame iframe').attr('src'));
		});
		$('.pub-mobile-frame select').each(function() {
			frame();
			$(this).on('change', function() { frame(); });
		});
		function frame() {
			var $this=$('.pub-mobile-frame select');
			var	$frame=$this.closest('.pub-mobile-frame').find('.pub-iframe');
			var	$option=$this.find('option:selected').val();
			var	$optionStr=$option.split('*');
			$this.attr('title', $option);
			$frame.css({'width': $optionStr[0], 'height': $optionStr[1]});
		}

		$('.pub-header .pub-side .progress button').each(function() {
			var $delayCount=$('.pub-site .pub-table .pub-tbody td.delay').length;
			if ($(this).attr('data-value')=='option1_10') $(this).append(' <span>(<strong>'+($delayCount)+'</strong>)</span>'); //지연
		});
		$('.pub-site .pub-table .pub-tbody td.dep2').each(function() {
			$text=$(this).text();
			if ($text!=$(this).parent().next().find('td.dep2').text()) $(this).parent().next().addClass('first');
		});

		$('.pub-site .pub-table .pub-tbody tr').each(function() {
			var $this = $(this);
			var $site = $this.closest('.pub-site');
			if (!$site.hasClass('nocount')) {
				['publisher', 'designer', 'planner', 'developer'].forEach(function(role) {
					var $cell = $this.find('td.' + role);
					if (!$cell.html()) {
						$cell.addClass('worker').html('TBD');
					}
				});
			}

			var $prevRow = $this.prev('tr');
			var depTotal = $this.children('td[class*=dep]').length;
			for (var i = 1; i <= depTotal + 1; i++) {
				var $currentDep = $this.find('td.dep' + i);
				var $previousDep = $prevRow.find('td.dep' + i);
		
				if ($currentDep.text() !== $previousDep.text() || $this.hasClass('first')) {
					$currentDep.addClass('overlap-dep');
				}
				// else if ($prevRow.hasClass('del') && !$this.hasClass('del') && $currentDep.html()) {
				// 	$currentDep.addClass('overlap-dep');
				// }
			}

			//수정일자 중복체크
			const textValues = {};
			const duplicates = [];
			$this.find('td.modify li span').each(function() {
				const text = $(this).text().trim();
				if (textValues[text]) {
					duplicates.push($(this));
				} else {
					textValues[text] = $(this);
				}
			});
			duplicates.forEach(span => {
				span.closest('ul').css('border', '2px solid blue');
			});
			if (duplicates.length > 0) {
				alert('수정일자가 중복되었습니다.\n한 날짜에 수정이력을 작성하세요.');
			}

			//수정일자 누락체크
			var hasMissingDates = false;
			$this.find('td.modify li').each(function() {
				const $li = $(this);
				const text = $li.text().trim();
				if (text.match('null')) {
					$li.closest('ul').css('border', '2px solid red');
					hasMissingDates = true;
				}
			});
			if (hasMissingDates) {
				alert('수정일자가 누락되었습니다.');
			}
		});

		$('.pub-total .pub-button-detail').on('click', function() {
			if ($(this).attr('aria-expanded')=='false') {
				$('.pub-total .pub-button-detail').attr('aria-expanded', 'false');
				$('.pub-total').parent().parent().removeClass('on');
				$(this).attr('aria-expanded', 'true').closest('.pub-total').parent().parent().addClass('on');
			} else {
				$(this).attr('aria-expanded', 'false').closest('.pub-total').parent().parent().removeClass('on');
			}
		});
		$('.pub-header .pub-toggle').on('click', function() {
			$('.pub-nav .pub-all a').click();
			if ($(this).attr('aria-pressed')=='false') {
				$(this).attr('aria-pressed', 'true');
				$('.pub-site .pub-table').hide();
			} else {
				$(this).attr('aria-pressed', 'false');
				$('.pub-site .pub-table').show();
			}
		});

		//정보복사
		$('.pub-site .pub-table .pub-tbody td.id').each(function() {
			var $this=$(this);
			$this.append('<button type="button" class="pub-copy" title="정보복사"></button>')
		});
		$('.pub-site .pub-table .pub-tbody td .pub-copy').on('click', function() {
			var $this=$(this);
			var	$dep1=$this.closest('.pub-site').find('.pub-site-title h2 > span').text();
			var	$dep2=$this.closest('tr').find('td.dep2').text();
			var	$dep3=$this.closest('tr').find('td.dep3').text();
			var	$dep4=$this.closest('tr').find('td.dep4').text();
			var	$dep5=$this.closest('tr').find('td.dep5').text();
			var	$dep6=$this.closest('tr').find('td.dep6').text();
			var	$screen=$this.closest('tr').find('td.screen').text();
			var	$id=$this.closest('tr').find('td.id').text();
			if ($dep2) var $dep2=' > ' + $dep2;
			if ($dep3) var $dep3=' > ' + $dep3;
			if ($dep4) var $dep4=' > ' + $dep4;
			if ($dep5) var $dep5=' > ' + $dep5;
			if ($dep6) var $dep6=' > ' + $dep6;
			if ($screen) var $screen=' > ' + $screen;
			var $screen=$dep1+$dep2+$dep3+$dep4+$dep5+$dep6+$screen+" - "+$id;
			$('body').append('<textarea id="pub-screen-textarea"></textarea>');
			$('#pub-screen-textarea').val($screen).select();
			document.execCommand('Copy');
			$('#pub-screen-textarea').remove();
			clipboardCopyMsg();
		});

		//모바일뷰
		var $moFrame=$('.pub-mobile-frame');
		var	$moFrameInner=$moFrame.find('.pub-mobile-frame-inr');
		var	$moWidth=$moFrameInner.outerWidth();
		var	$moBtnWidth=$('.pub-frame-toggle').outerWidth();
		$moFrame.css('visibility', 'visible');
		$moFrameInner.css('right', -$moWidth);
		$('.pub-viewer').on('click', function () {
			if ($(this).attr('aria-pressed')=='false') $(this).attr('aria-pressed', 'true');
			else $(this).attr('aria-pressed', 'false');
			var $nowFrame=$('.pub-mobile-frame .pub-mobile-frame-inr');
			var	$nowWidth=$nowFrame.outerWidth();
			if ($('.pub-viewer').attr('aria-pressed')=='true') $nowFrame.css('right', -$nowWidth + $moBtnWidth);
			else $('.pub-mobile-frame').removeClass('on').find('.pub-mobile-frame-inr').css('right', -$nowWidth);
		});
		$moFrame.find('.pub-frame-toggle').on('click', function () {
			mobileFrameAction();
			var $frame=$(this).closest('.pub-mobile-frame');
			var	$frameInner=$frame.find('.pub-mobile-frame-inr');
			var	$width=$frameInner.outerWidth();
			if ($frame.hasClass('on')) $frameInner.animate({ right: -$width + $moBtnWidth }, 0, function () {
				$frame.removeClass('on');
			});
		});
		function mobileFrameAction() {
			$moFrameInner.animate({right: 12}, 100, function () {
				$moFrame.addClass('on');
			});
		}
		$(window).on('resize', function () {
			if ($('html').attr('id')=='isMobile') {
				if ($('.pub-viewer').attr('aria-pressed')=='true') $moFrameInner.css('right', -$moFrameInner.outerWidth() + $moBtnWidth);
				else $moFrameInner.css('right', -$moFrameInner.outerWidth() - $moBtnWidth);
				$moFrame.removeClass('on');
			}
		});

		//전체수정이력
		$('.pub-site .pub-table .pub-tbody td.modify').each(function() {
			if ($(this).children().length>0) $('.pub-modify-open').attr('disabled', false);
		});
		$('.pub-modify-open').off('click').on('click', function (e) {
			if ($('.pub-modify-open').hasClass('on')) {
				$('.pub-modify-open').removeClass('on');
				$('.pub-content').show();
				$('.pub-modify').hide();
			} else {
				$('.pub-modify-open').addClass('on');
				$('.pub-content').hide();
				$('.pub-modify').show();
				showModifyList();
			}
		});

		var groupBy=function groupBy(data, key) {
			return data.reduce(function (carry, el) {
				var $group=el[key];
				if (carry[$group]==undefined) carry[$group]=[];
				carry[$group].push(el);
				return carry;
			}, {});
		};

		function showModifyList(groupByDeveloper = false) {
			var a = $('.pub-site .pub-table .pub-tbody tr:not(.del, .ing) .modify span')
				.filter(':contains(20)')
				.toArray()
				.map(function(el) {
					var $this = $(el);
					var	$li = $this.closest('li');
					var	$title = $this.closest('.pub-site').find('.pub-site-title h2>span');
					var	$tr = $this.closest('tr');
					var	$date = $this.text().trim().split('(')[0];
					var	$modify = $li.find('p').text().trim();
					var	$id2 = $tr.find('td.id a');
					var	$id = $id2.text();
					var $url2 = $tr.find('td.url');
					var $url = $url2.text();
					var	$path=window.location.href;
					var	$dep = '';
					var $developer;

					if (ext === 'html') {
						if ($url2.html()=='') $path=$path.substring(0, $path.lastIndexOf($id));
						else $path='..'+$path.substring(0, $path.lastIndexOf($id));
					}
					if (ext === 'xml') {
						$path=$path.substring(0, $path.lastIndexOf('=')+1);
					}
					var $href=$path+$url+$id;
					if ($id2.html()!='') {
						$href = ('<a href="'+$href+'.'+ext+'" target="_blank"><strong>'+$id+'</strong></a>');
					}

					if (groupByDeveloper) { //개발자 & 메뉴
						if (dev !== '0') {
							if ($title.text()) $dep += $title.text();
							$developer = $tr.find('.developer').text();
							['dep2', 'dep3', 'dep4', 'dep5', 'dep6', 'screen'].forEach(function(depClass) {
								if ($tr.find('.' + depClass).text()) {
									$dep += '<span> > </span>' + $tr.find('.' + depClass).text();
								}
							});
						} else {
							$developer = $tr.closest('.pub-site').find('.pub-site-title h2>span').text();
							$dep += '' + $tr.find('.dep2').text();
							['dep3', 'dep4', 'dep5', 'dep6', 'screen'].forEach(function(depClass) {
								if ($tr.find('.' + depClass).text()) {
									$dep += '<span> > </span>' + $tr.find('.' + depClass).text();
								}
							});
						}
					} else { //수정일
						if (dev !== '0') {
							if ($title.text()) $dep += $title.text();
							$developer = $tr.find('.developer').text();
							['dep2', 'dep3', 'dep4', 'dep5', 'dep6', 'screen'].forEach(function(depClass) {
								if ($tr.find('.' + depClass).text()) {
									$dep += '<span> > </span>' + $tr.find('.' + depClass).text();
								}
							});
						} else {
							$developer1 = $tr.closest('.pub-site').find('.pub-site-title h2>span').text();
							$developer2 = $tr.find('.dep2').text();
							$developer = $developer1 + ' > ' + $developer2;
							$dep += '' + $tr.find('.dep3').text();
							['dep4', 'dep5', 'dep6', 'screen'].forEach(function(depClass) {
								if ($tr.find('.' + depClass).text()) {
									$dep += '<span> > </span>' + $tr.find('.' + depClass).text();
								}
							});
						}
					}

					$dep = $dep.trim();
					return { date: $date, developer: $developer, dep: $dep, modify: $modify, href: $href };
				});
		
			function groupAndSortData(data, primaryGroupKey, secondaryGroupKey) {
				const groupedData = groupBy(data, primaryGroupKey);
				const result = [];
			
				for (const primaryKey in groupedData) {
					const secondaryGroupedData = groupBy(groupedData[primaryKey], secondaryGroupKey);
			
					let sortedSecondaryGroups;
					if (primaryGroupKey === 'developer') {
						sortedSecondaryGroups = Object.keys(secondaryGroupedData)
							.sort((a, b) => b.localeCompare(a));
					} else {
						sortedSecondaryGroups = Object.keys(secondaryGroupedData)
							.sort();
					}
			
					const sortedSecondaryGroupsObject = sortedSecondaryGroups.reduce((acc, key) => {
						acc[key] = secondaryGroupedData[key];
						return acc;
					}, {});
			
					result.push({
						[primaryGroupKey]: primaryKey,
						group: sortedSecondaryGroupsObject,
						count: groupedData[primaryKey].length
					});
				}
			
				result.sort((a, b) => {
					if (primaryGroupKey === 'developer') {
						return b[primaryGroupKey].localeCompare(a[primaryGroupKey]);
					} else if (primaryGroupKey === 'date') {
						return new Date(b[primaryGroupKey]) - new Date(a[primaryGroupKey]);
					}
					return 0;
				});
				return result;
			}
		
			var result = groupByDeveloper ? groupAndSortData(a, 'developer', 'date') : groupAndSortData(a, 'date', 'developer');
		
			var $resultObj = result.map(function(groupData) {
				var list = '';
				Object.keys(groupData.group).forEach(function(groupKey) {
					var content = groupData.group[groupKey].map(function(item) {
						return '● ' + item.dep + '<br>\n' + item.href + '<br>\n' + item.modify + '<br><br>';
					}).join('\n\n');
		
					list += '\n\n<br><div class="mb2-' + groupKey + '"><em>' + (groupByDeveloper ? '<span class="pub-ty1">' + groupKey + '</span><button type="button" class="pub-modify-copy2"></button>' : '<span class="pub-ty2">[' + groupKey + ']</span><button type="button" class="pub-modify-copy2"></button>') + '</em><br>\n\n' + content + '</div>\n';
				});
				return {
					label: groupData[groupByDeveloper ? 'developer' : 'date'],
					list: list,
					count: groupData.count
				};
			});
		
			var $resultHTMLHead = $resultObj.map(function(html, index) {
				return '<option' + (index === 0 ? ' selected' : '') + ' title="' + html.count + '">' + html.label + '</option>';
			}).join('');
		
			var $announcement = '※수정일자(YYYY-MM-DD)를 검색하세요.\n\n';
			var $resultHTMLBody = $resultObj.map(function(html) {
				return '<div class="mb-' + html.label + '"><div class="pub-announcement">' + $announcement +'</div><mark>' + (groupByDeveloper ? '<strong class="pub-ty1">[' + html.label + ']</strong>' : '<strong class="pub-ty2">' + html.label + '</strong>') + '</mark>' + html.list + '</div>';
			}).join('');
	
			$('.pub-modify').html('<div class="pub-modify-inr"><select multiple>' + $resultHTMLHead + '</select><div class="pub-modify-list">' + $resultHTMLBody + '</div><p class="pub-msg">※ 퍼블소스 업데이트 후, 수정일자(YYYY-MM-DD)를 검색하세요. (동일한 수정일자가 있을 수 있으니 전반적 검색)</p></div><button type="button" class="pub-modify-copy"><span></span></button><button type="button" class="pub-modify-close" title="닫기"><span></span><span></span><span></span></button>');
		
			if (dev !== '0') $('.pub-modify').prepend('<div class="pub-radio"><span><input type="radio" name="view-option" value="date" id="pub-radio1"' + (!groupByDeveloper ? ' checked' : '') + '><label for="pub-radio1">수정일자</label></span><span><input type="radio" name="view-option" value="developer" id="pub-radio2"' + (groupByDeveloper ? ' checked' : '') + '><label for="pub-radio2">개발자</label></span></div>');
			else $('.pub-modify').prepend('<div class="pub-radio"><span><input type="radio" name="view-option" value="date" id="pub-radio1"' + (!groupByDeveloper ? ' checked' : '') + '><label for="pub-radio1">수정일자</label></span><span><input type="radio" name="view-option" value="developer" id="pub-radio2"' + (groupByDeveloper ? ' checked' : '') + '><label for="pub-radio2">메뉴별</label></span></div>');
		
			$('.pub-modify-inr > select').off('change').on('change', function(e) {
				var $this = $(this);
				var selectedDeveloper = $this.val();
				var $list = $('.pub-modify-list > div');
				$list.hide();
			
				if (selectedDeveloper) {
					$list.filter('.mb-' + selectedDeveloper).show();
				}
			
				$('.pub-modify .pub-modify-list [class*="mb-"]').scrollTop(0);
			}).trigger('change');
			
			$('input[name="view-option"]').change(function() {
				var selectedOption = $(this).val();
				if (selectedOption === 'date') {
					showModifyList(false);
				} else if (selectedOption === 'developer') {
					showModifyList(true);
					$('.pub-modify-inr > select')[0].selectedIndex = 0;
					$('.pub-modify-inr > select').trigger('change');
				}
			});

			$('.pub-modify .pub-modify-list mark, .pub-modify .pub-modify-list em, .pub-modify .pub-modify-inr > select option').each(function () {
				var $this=$(this);
				var	$text=$this.text();
				var	$date=$text.replace(/-/g,'');
				if ($date==$nowDate) $this.addClass('today');
				else if ($date>$nowDate) $this.addClass('after');
				else if ($date==$nowDate-1) $this.addClass('yesterday');
				else if ($day=='01' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $date==$nowDate-2) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $date==$nowDate-3) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate-1) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='01' && $date==$prevLastDate-2) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='02' && $date==$prevLastDate) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='02' && $date==$prevLastDate-1) $this.addClass('yesterday');
				else if ($dayOfWeek==$monday && $day=='03' && $date==$prevLastDate) $this.addClass('yesterday');
			});

			$('.pub-modify .pub-modify-list a').on('click', function() {
				$('.pub-modify .pub-modify-list a').removeClass('active');
				$(this).addClass('active');
			});

			$('.pub-modify-copy').off('click').on('click', function(e) {
				var $text = $('.pub-modify .pub-modify-list>div:visible').text();
				$('body').append('<textarea id="pub-modify-textarea"></textarea>');
				$('#pub-modify-textarea').val($text).select();
				document.execCommand('Copy');
				$('#pub-modify-textarea').remove();
				clipboardCopyMsg();
			});
			$('.pub-modify-copy2').off('click').on('click', function(e) {
				var $this = $(this);
				var $list = $this.closest('div[class*="mb2-"]').text();
				var $mark = $this.closest('div[class*="mb-"]').find('mark').text();
				var $msg = $this.closest('div[class*="mb-"]').find('.pub-announcement').text();
				var $text = $msg + $mark + '\n\n' + $list;
				console.log($mark);
				$('body').append('<textarea id="pub-modify-textarea"></textarea>');
				$('#pub-modify-textarea').val($text).select();
				document.execCommand('Copy');
				$('#pub-modify-textarea').remove();
				clipboardCopyMsg();
			});
		}
		$(document).on('click', '.pub-modify-close', function () {
			$('.pub-modify-open').click();
		});

		/* CSV다운로드 */
		$('.pub-csv-download').off('click').on('click', function(e) {
			e.preventDefault();
			if (typeof $pub_index_data === 'undefined') {
				console.error('pub_index_data json 목록이 없습니다.');
				return;
			}
			if ($pub_index_data.length === 0) {
				console.error('pub_index_data json 목록이 비어있습니다.');
				return;
			}

			const csvData = jsonToCSV($pub_index_data);
			const tabPrefix = $('.pub-tab.on').length ? $('.pub-tab.on').text() + '_' : '';
			const bom = '\uFEFF';
			const blob = new Blob([bom + csvData], { type: 'text/csv;charset=utf-8;' });
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = (tab !== '0') ? tabPrefix + 'index_data.csv' : 'index_data.csv';
			link.click();
		});

		function jsonToCSV(jsonData) {
			const excludedHeaders = ['COUNT', 'URL', 'MODIFY', 'NOTE', 'SB'];
			if (dev === '0') excludedHeaders.push('DEV');
			if (dgn === '0') excludedHeaders.push('DGN');
			if (pla === '0') excludedHeaders.push('PLA');
		
			const headers = Object.keys(jsonData[0]).filter(header => !excludedHeaders.includes(header));
			const csvRows = [headers.join(',')];
		
			jsonData.forEach(row => {
				row.STATUS = row.STATUS === '0' ? '삭제' : '';
				if (row.TYPE) {
					row.TYPE = row.TYPE.toUpperCase();
					if (row.TYPE === 'F') row.TYPE = 'F(메인)';
					if (row.TYPE === 'P') row.TYPE = 'P(팝업)';
					if (row.TYPE === 'T') row.TYPE = 'T(탭)';
					if (row.TYPE === 'L') row.TYPE = 'L(링크)';
					if (row.TYPE === 'FP') row.TYPE = 'P(팝업)';
					if (row.TYPE === 'CP') row.TYPE = 'P(팝업)';
					if (row.TYPE === 'BP') row.TYPE = 'P(팝업)';
				}
		
				if (!String(row.COUNT).startsWith('0')) {
					const values = headers.map(header => {
						const escapedValue = ('' + row[header]).replace(/"/g, '""');
						return `"${escapedValue}"`;
					});
					csvRows.push(values.join(','));
				}
			});
		
			csvRows[0] = csvRows[0].split(',').map(cell => cell.replace('DEP', 'Depth')).join(',');
			csvRows[0] = csvRows[0].replace('SCREEN', '화면명');
			csvRows[0] = csvRows[0].replace('TYPE', '유형');
			csvRows[0] = csvRows[0].replace('ID', '화면ID');
			csvRows[0] = csvRows[0].replace('PLA', '기획');
			csvRows[0] = csvRows[0].replace('DGN', '디자인');
			csvRows[0] = csvRows[0].replace('PUB', '퍼블리싱');
			csvRows[0] = csvRows[0].replace('DEV', '개발');
			csvRows[0] = csvRows[0].replace('STATUS', '상태');
			csvRows[0] = csvRows[0].replace('WBS', '완료예정일');
			csvRows[0] = csvRows[0].replace('END', '최종완료일');
		
			return csvRows.join('\n');
		}

		/* 검색 */
		function isCho(e) {
			var t = /[ㄱ-ㅎ]/gi;
			return t.test(e)
		}
		function cho_hangul(e) {
			for (cho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"], result = "", i = 0; i<e.length; i++) code = e.charCodeAt(i) - 44032, code > -1 && code < 11172 ? result += cho[Math.floor(code / 588)] : result += e.charAt(i);
			return result
		}
		$('.pub-header .pub-search .pub-search-btn').on('click', function() {
			var $this=$(this);
			var	$input=$this.prev();
			var	$val=$input.val().toLowerCase();
			var	$valSpacing=$input.val().toLowerCase().replace(' ','');
			resetRecord();
			resetDepth();
			resetLabel();
			$('.pub-site .pub-table .pub-tbody tr').filter(function() {
				if (isCho($val)) {
					 $(this).toggle($(this).text().toLowerCase().indexOf($val) > -1 || (cho_hangul($(this).text().toLowerCase()).toLowerCase().indexOf(cho_hangul($val)) > -1));
					 $(this).toggle($(this).text().toLowerCase().replace(' ','').indexOf($valSpacing) > -1 || (cho_hangul($(this).text().toLowerCase()).toLowerCase().replace(' ','').indexOf(cho_hangul($valSpacing)) > -1));
				} else {
					$(this).toggle($(this).text().toLowerCase().indexOf($val) > -1);
					$(this).toggle($(this).text().toLowerCase().replace(' ','').indexOf($valSpacing) > -1);
				}
			});
			var $highlight=$('td[class*="dep"] span:contains("'+$val+'"), td.screen span:contains("'+$val+'"), td.type span:contains("'+$val+'"), td.url:contains("'+$val+'"), td.id strong:contains("'+$val+'"), td.publisher span:contains("'+$val+'"), td.designer span:contains("'+$val+'"), td.planner span:contains("'+$val+'"), td.developer span:contains("'+$val+'"), td.note:contains("'+$val+'")');
			$highlight.each(function () {
				var $regex = new RegExp($val,'gi');
				$(this).html( $(this).text().replace($regex, "<i class='pub-highlight'>"+$val+"</i>") );
			});
		});
		$('.pub-header .pub-search input').keyup(function(key) {
			if (key.keyCode==13) $('.pub-header .pub-search .pub-search-btn').click();
		});

		$(document).on('click', '.pub-header .pub-refresh', function() {
			resetRecord();
			resetSearch();
			resetDepth();
			resetLabel();
			$('.pub-site .pub-table .pub-thead tr').find('th.modify button[aria-pressed="true"]').click();
			$('.pub-site .pub-table .pub-tbody tr').find('td.modify li').css('display','');
		});

		//초기화
		function resetRecord() {
			$('.pub-header .pub-record .pub-option>button').addClass('on').parent().prev().removeClass('on').html('# 전체');
			$('.pub-header .pub-record .pub-option>button').next('.pub-option-inr').find('button').removeClass('on');
			$('.pub-header .pub-record .pub-option>button').next('.pub-option-inr').find('a').removeClass('on').next().hide();
			$('.pub-header .pub-record .pub-option>button').next('.pub-option-inr').find('.progress a').addClass('on').next().show();
		}
		function resetSearch() {
			$('.pub-header .pub-search input').val('');
			$('.pub-site .pub-table .pub-tbody tr').show();
			$('.pub-highlight').each(function() {
				$(this).replaceWith($(this).text());
			});
		}
		function resetDepth() {
			$('.pub-site .pub-table .pub-thead th select').removeClass('on').find('option:first').prop('selected', true);
			$('.pub-site .pub-table .pub-tbody tr').css('display','');
		}
		function resetLabel() {
			$('.pub-header .pub-label li .yesterday.on, .pub-header .pub-label li.check.on').removeClass('on');
			$('.pub-site .pub-table .pub-tbody td.modify li').hide();
			$('.pub-site .pub-table .pub-tbody td.modify li:first-child').show();
		}

		$(document).bind('mouseup touchend', function(e) {
			var $target=$('.pub-total');
			if (!$target.is(e.target) && $target.has(e.target).length==0) $('.pub-total .pub-button-detail').attr('aria-expanded', 'false').closest('.pub-total').parent().parent().removeClass('on');
			var $target=$('.pub-record');
			if (!$target.is(e.target) && $target.has(e.target).length==0) {
				$('.pub-record > button').attr('aria-expanded', 'false').next().slideUp(200);
				setTimeout(function() {
					if ($('.pub-record .pub-option > button').hasClass('on')) {
						$('.pub-record a').removeClass('on').next().hide();
						$('.pub-record .progress a').addClass('on').next().show();
					} else {
						$('.pub-record button.on').closest('div').show().prev().addClass('on').parent().siblings().find('a.on').removeClass('on').next().hide();
					}
				}, 300);
			}
		});
	}

	/* GUIDE */
	if ($('.pub-wrap').attr('data-layout') === 'guide') {
		if (tab !== '0') $('.pub-tab-list').show();
		$('.pub-site .pub-template').each(function() {
			if ($(this).find('.pub-code').length) $(this).find('.pub-code').append('<button type="button" class="pub-copy" title="Copy Code"><span></span></button>');
		});
		$('.pub-site .pub-site-content .pub-code').each(function() {
			var $code=$(this).find('.pub-pre').html();
			if ($(this).find('pre').length) $code=$code.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
			$(this).find('.pub-copy').on('click', function() {
				$('body').append('<textarea id="pub-code-textarea"></textarea>');
				$('#pub-code-textarea').val($code).select();
				document.execCommand('Copy');
				$('#pub-code-textarea').remove();
				clipboardCopyMsg();
			});
		});
	}

	/* COMMON */
	var $pub_global='';
		$pub_global += '<div class="pub-global">';
			$pub_global += '<ul>';
				$pub_global += '<li><a href="convention.html"><span>작업규칙</span></a></li>';
				$pub_global += '<li><a href="accessibility.html"><span>접근성</span></a></li>';
			$pub_global += '</ul>';
			$pub_global += '<button type="button" class="pub-global-close on"><span></span><span></span><span></span></button>';
		$pub_global += '</div>';
	var $pub_nav='';
		$pub_nav += '<div class="pub-nav">';
			$pub_nav += '<div class="pub-nav-inr">';
				$pub_nav += '<div class="pub-all"><a href="#menu0" class="on"><span>전체</span></a></div>';
				$pub_nav += '<div class="pub-menu"></div>';
			$pub_nav += '</div>';
		$pub_nav += '</div>';

	var layout = $('.pub-wrap').attr('data-layout');
	if (layout !== 'index' && layout !== 'guide') {
		$('.pub-header').append($pub_global);
		$('.pub-global a').each(function() {
			var $this=$(this),
				$value=$this.attr('href'),
				$value=$value.slice(0, $value.length-5);
			if ($('.pub-wrap').attr('data-layout').indexOf($value)!=-1) $this.addClass('on');
		});
	}
	$('.pub-header .pub-title').after($pub_nav);
	$('.pub-header .pub-tab-list .pub-tab.on').attr('disabled', true);

	function device() {
		var $filter="win16|win32|win64|mac",
			$isMobile=navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/) || $filter.indexOf(navigator.platform.toLowerCase()) < 0 ? true : false;
		if ($isMobile) $('html').attr('id', 'isMobile');
		else $('html').removeAttr('id', 'isMobile').find('body').removeClass('pub-nav-up').addClass('pub-nav-down');
	} device();
	$(window).on('resize', function() { device(); });

	var $didScroll;
	var	$lastScrollTop=0;
	var	$delta=0;
	$(window).scroll(function(event) {
		$didScroll=true;
	});
	setInterval(function() {
		if ($didScroll) {
			hasScrolled();
			$didScroll=false;
		}
	}, 100);

	function hasScrolled() {
		var $st=$(this).scrollTop();
		if (Math.abs($lastScrollTop - $st) <= $delta) {return;}
		if ($st>$lastScrollTop) { //Scroll Down
			$('body').removeClass('pub-nav-down').addClass('pub-nav-up');
			$('.pub-page-top').removeClass('on');
		}
		else if ($st + $(window).height() + 100 < $(document).height()) { //Scroll Up
			$('body').removeClass('pub-nav-up').addClass('pub-nav-down');
			$('.pub-page-top').addClass('on');
		}
		if ($(document).scrollTop() <= $delta + 10) { //최상단
			$('body').removeClass('pub-nav-down').addClass('pub-nav-top');
			$('.pub-page-top').removeClass('on');
		}
		else $('body').removeClass('pub-nav-top');
		if ($st == $(document).height() - $(window).height()) { //최하단
			$('body').addClass('pub-nav-bottom');
		}
		else $('body').removeClass('pub-nav-bottom');
		$lastScrollTop=$st;
	}

	$(window).on('scroll', function() {
		scrollProgress();
		$('.pub-header .pub-legend .pub-global-btn').attr('aria-expanded', 'false');
		$('.pub-header .pub-global').removeClass('on');
	});
	$('.pub-header .pub-header-inr').prepend('<div class="pub-scroll-progress"><div></div></div>');
	$('.pub-wrap').append('<div class="pub-page-top"><button type="button"></button></div>');
	function scrollProgress() {
		if (($(document).outerHeight()-$(window).height())<1) currentPercentage=0;
		else currentPercentage=($(window).scrollTop()/($(document).outerHeight()-$(window).height()))*100;
		$('.pub-scroll-progress div').width(currentPercentage+'%');
	}
	$('.pub-header .pub-legend .pub-global-btn').on('click', function() {
		$(this).attr('aria-expanded', 'true');
		$('.pub-header .pub-global').addClass('on');
	});
	$('.pub-header .pub-global .pub-global-close').on('click', function() {
		$('.pub-header .pub-legend .pub-global-btn').attr('aria-expanded', 'false');
		$('.pub-header .pub-global').removeClass('on');
	});
	$('.pub-header .pub-global li a').on('click', function() {
		if ($(this).hasClass('on')) return false;
	});
	$('.pub-site').each(function() {
		var $index=$('.pub-site').index($(this)[0]);
		$(this).attr('id','menu'+$index);
	});
	$('.pub-header .pub-nav .pub-menu').each(function() {
		var $this=$(this);
		var	$arrtabhtml=[];
		var	$i=0;
		$('.pub-site .pub-site-title h2>span').each(function() {
			var $text=$(this).text();
			$arrtabhtml.push('<li><a href=\'#\' title=\''+$text+'\'><span>'+$text+'</span></a></li>');
			$i++
		});
		if ($('.pub-site .pub-site-title h2>span').length>0) $this.append('<ul>'+$arrtabhtml.join('\n')+'</ul>');
	});
	$('.pub-header .pub-nav li').each(function() {
		var $index=$('.pub-nav li').index($(this)[0]);
		$(this).find('> a').attr('href','#menu'+$index);
	});
	$('.pub-header .pub-nav a').on('click', function() {
		scrollProgress();
		if (!$(this).hasClass('on')) {
			$('.pub-header').removeClass('pub-nav-up');
			if (!$(this).parent().hasClass('pub-all')) {
				var $viewBox=$(this).attr('href');
				$('.pub-site').fadeOut(0);
				$('.pub-site'+$viewBox).fadeIn(100);
				$('.pub-site .pub-table>table').show();
			}
			else $('.pub-site').fadeIn(100);
			$(this).closest('.pub-nav').find('a').removeClass('on');
			$(this).addClass('on');
			$('html,body').animate({scrollTop:0}, 0);

			var menu=$(this);
			if(menu.closest('.pub-all').length){
				setUrlParamsMU(false);
			} else {
				var $li=menu.closest('li');
				var $idx=$li.index();
				setUrlParamsMU('tab', $idx);
			}

			var $menu=$(this);
			var	$scrItem=$('.pub-menu li');
			var	$scrIWidth=0;
			for (var i=0; i<$scrItem.length; i++) $scrIWidth+=$scrItem.eq(i)[0].getBoundingClientRect().width;
			var $target=$menu.parent();
			muCenter($target);
			function muCenter(target){
				var $box=$menu.closest('.pub-nav-inr');
				var	$boxItem=$box.find('li');
				var	$boxHarf=$box.width()/2;
				var	$pos;
				var	$listWidth=0;
				var	$targetLeft=0;
				$boxItem.each(function(){ $listWidth+=$(this)[0].getBoundingClientRect().width; });
				for (var i=0; i<target.index(); i++) $targetLeft+=$boxItem.eq(i)[0].getBoundingClientRect().width; // 선택요소 까지 길이
				var $selectTargetPos=($targetLeft+target.outerWidth()/2);
				if ($selectTargetPos<=$boxHarf) $pos=-50; // left
				else if ($listWidth-$selectTargetPos<=$boxHarf) $pos=$listWidth-$box.width()+30; //right : target 절반 이후 영역이 $boxHarf 보다 작을경우 right 정렬
				else $pos=$selectTargetPos-$boxHarf; // 중앙정렬
				$box.animate({scrollLeft:$pos+50}, 300);
			}
			return false;
		}
		else return false;
	});

	/* TOP */
	$('.pub-page-top>button').on('click', function() {
		$('html,body').animate({scrollTop: 0}, 100);
	});

	function clipboardCopyMsg() {
		$('body').append('<div class="clipboard" style="display:none;position:fixed;left:50%;top:50%;z-index:99999;padding:50px 60px;background-color:#fff;border-radius:5px;box-shadow:0 3px 5px 0 rgba(0,0,0,.2);font-size:14px;color:#111;transform:translate3d(-50%,-50%,0);">클립보드에 복사되었습니다.</div>');
		$('.clipboard').fadeIn(100);
		setTimeout(function() {
			$('.clipboard').fadeOut(300).remove();
		}, 600);
	}

	loadingBarEnd();

	var $tab=getUrlParamsMU().tab;
	if($tab) {
		$tab=parseInt($tab);
		$('.pub-header .pub-nav .pub-menu > ul > li').eq($tab).find('a').click();
	}
}, 50);

//파라미터 값 가져오기
function getUrlParamsMU() {
	const params={};
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
		params[key]=value;
	});
	return params;
}
function setUrlParamsMU(key, value) {
	const currentUrl=new URL(window.location.href);
	const params=new URLSearchParams(currentUrl.search);
	let newUrl=currentUrl.pathname;
	if(key) {
		params.set(key, value);
		newUrl=newUrl+'?'+params.toString();
	}
	history.pushState(null, '', newUrl);
}
