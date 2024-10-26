setTimeout(function() {
	/* INDEX */
	if ($('.pub-wrap').attr('data-layout')=='index') {
		markupLayout();
		markupList();

		//Guide Markup Layout
		function markupLayout() {
			var pub_index_site='<div class="pub-content">';
				pub_index_site += '</div>';
			$('.pub-page').append(pub_index_site);
		}

		//Guide Markup List Rander
		function markupList() {
			var pub_index_list='';
			for(var i=0; i < pub_index_data.length; i++) {
				var count=pub_index_data[i].COUNT,
					depth1Name=pub_index_data[i].DEP1.replace(/ /gi,"").replace(/[/]/gi, 'ㆍ').replace(/[(]/gi, '！').replace(/[)]/gi, '？');
					depth2Name=pub_index_data[i].DEP2,
					depth3Name=pub_index_data[i].DEP3,
					depth4Name=pub_index_data[i].DEP4,
					depth5Name=pub_index_data[i].DEP5,
					depth6Name=pub_index_data[i].DEP6,
					screen=pub_index_data[i].SCREEN,
					type=pub_index_data[i].TYPE,
					url=pub_index_data[i].URL,
					id=pub_index_data[i].ID,
					publisher=pub_index_data[i].PUB,
					planner=pub_index_data[i].PLA,
					developer=pub_index_data[i].DEV,
					schedule=pub_index_data[i].WBS,
					state=pub_index_data[i].STATE,
					date=pub_index_data[i].DATE,
					modify=pub_index_data[i].MODIFY.replace(/\['/g, '<li><span>').replace(/','/g, '</span><p>').replace(/'\]/g, '</p></li>'),
					memo=pub_index_data[i].MEMO.replace(/\[/g, '<li>').replace(/\]/g, '</li>'),
					sb=pub_index_data[i].SB;

				var pub_index_site='';
					pub_index_site += '<div class="pub-site">';
						pub_index_site += '<div class="pub-site-title">';
							pub_index_site += '<h2>';
								pub_index_site += '<span>'+ depth1Name +'</span><div class="pub-progress"></div>';
							pub_index_site += '</h2>';
						pub_index_site += '</div>';
						pub_index_site += '<div class="pub-table" id="index_'+ depth1Name +'">';
							pub_index_site += '<div class="pub-thead">';
								pub_index_site += '<table>';
									pub_index_site += '<colgroup><col class="no"><col class="dep2"><col class="dep3"><col class="dep4"><col class="dep5"><col class="dep6"><col class="screen"><col class="type"><col class="url"><col class="id"><col class="publisher"><col class="planner"><col class="developer"><col class="wbs"><col class="state"><col class="modify"><col class="memo"></colgroup>';
									pub_index_site += '<thead>';
									pub_index_site += '</thead>';
								pub_index_site += '</table>';
							pub_index_site += '</div>';
							pub_index_site += '<div class="pub-tbody">';
								pub_index_site += '<table>';
									pub_index_site += '<colgroup><col class="no"><col class="dep2"><col class="dep3"><col class="dep4"><col class="dep5"><col class="dep6"><col class="screen"><col class="type"><col class="url"><col class="id"><col class="publisher"><col class="planner"><col class="developer"><col class="wbs"><col class="state"><col class="modify"><col class="memo"></colgroup>';
									pub_index_site += '<tbody>';
									pub_index_site += '</tbody>';
								pub_index_site += '</table>';
							pub_index_site += '</div>';
						pub_index_site += '</div>';
					pub_index_site += '</div>';

				var pub_index_thead='';
					pub_index_thead += '<tr>';
						pub_index_thead += '<th class="no">번호</th>';
						pub_index_thead += '<th class="dep2">D2</th>';
						pub_index_thead += '<th class="dep3">D3</th>';
						pub_index_thead += '<th class="dep4">D4</th>';
						pub_index_thead += '<th class="dep5">D5</th>';
						pub_index_thead += '<th class="dep6">D6</th>';
						pub_index_thead += '<th class="screen">화면명</th>';
						pub_index_thead += '<th class="type">유형</th>';
						pub_index_thead += '<th class="url">URL</th>';
						pub_index_thead += '<th class="id">화면ID</th>';
						pub_index_thead += '<th class="publisher">퍼블</th>';
						pub_index_thead += '<th class="planner">기획</th>';
						pub_index_thead += '<th class="developer">개발</th>';
						pub_index_thead += '<th class="wbs">완료예정일</th>';
						pub_index_thead += '<th class="state">진행상태</th>';
						pub_index_thead += '<th class="modify">수정이력</th>';
						pub_index_thead += '<th class="memo">메모</th>';
					pub_index_thead += '</tr>';

				var pub_index_tbody='';
					pub_index_tbody += '<tr data-sb="'+ sb +'" class="';
					if (state.indexOf('1')==-1 && state.indexOf('2')==-1 && state.indexOf('0')==-1 && date.indexOf('-')==-1)  pub_index_tbody += 'wait';
					if (chk!='0') {
						if (state.indexOf('1')!=-1 && date.indexOf('-')==-1)  pub_index_tbody += 'ing';
						if (state.indexOf('2')!=-1 && date.indexOf('-')==-1) pub_index_tbody += 'chk';
					} else {
						if (state.indexOf('1')!=-1 && date.indexOf('-')==-1)  pub_index_tbody += 'ing';
						if (state.indexOf('2')!=-1 && date.indexOf('-')==-1) pub_index_tbody += 'ing';
					}
					if (date.indexOf('-')!=-1) pub_index_tbody += 'end';
					if (state.indexOf('0')!=-1 && date.indexOf('-')==-1) pub_index_tbody += 'del';
					if (state.indexOf('0')!=-1 && date.indexOf('-')!=-1) pub_index_tbody += ' del';
					if (date.indexOf('-')!=-1) state = date.replace(/[가-힣a-zA-Z\s]|[\{\}\[\]\/?.,;:|\)*~`!^\_+<>@\#$%&\\\=\(\'\"]/gi, '');
					pub_index_tbody += '">';
						pub_index_tbody += '<td class="dep2"><span>'+ depth2Name +'</span></td>';
						pub_index_tbody += '<td class="dep3"><span>'+ depth3Name +'</span></td>';
						pub_index_tbody += '<td class="dep4"><span>'+ depth4Name +'</span></td>';
						pub_index_tbody += '<td class="dep5"><span>'+ depth5Name +'</span></td>';
						pub_index_tbody += '<td class="dep6"><span>'+ depth6Name +'</span></td>';
						pub_index_tbody += '<td class="screen"><span>'+ screen +'</span></td>';
						pub_index_tbody += '<td class="type">'+ type +'</td>';
						pub_index_tbody += '<td class="url">'+ url +'</td>';
						pub_index_tbody += '<td class="id">'+ id +'</td>';
						pub_index_tbody += '<td class="publisher">'+ publisher +'</td>';
						pub_index_tbody += '<td class="planner">'+ planner +'</td>';
						pub_index_tbody += '<td class="developer">'+ developer +'</td>';
						pub_index_tbody += '<td class="wbs">'+ schedule +'</td>';
						pub_index_tbody += '<td class="state">'+ state +'</td>';
						pub_index_tbody += '<td class="modify"><ul>'+ modify +'</ul></td>';
						pub_index_tbody += '<td class="memo"><ul>'+ memo +'</ul></td>';
					pub_index_tbody += '</tr>';

				if ($('.pub-content').find('#index_'+ depth1Name).length==0) $('.pub-content').append(pub_index_site);
				$('#index_'+ depth1Name).find('.pub-tbody tbody').append(pub_index_tbody);
				if (count==0) $('.pub-site').addClass('nocount');
			}
			$('.pub-thead thead').append(pub_index_thead);
			$('.pub-content').append(pub_index_list);
			$('.pub-site .pub-site-title h2 > span').each(function() {
				var self=$(this),
					selfText=self.text().replace(/[ㆍ]/gi, '/').replace(/[！]/gi, '(').replace(/[？]/gi, ')');
				self.html(selfText);
			});
		}

		$('.pub-page').after('<div class="pub-mobile-frame"><div class="pub-mobile-frame-inr"><div class="pub-device"><select><option value="375*667">iPhone 6/7/8</option><option value="375*812">iPhone 12 Mini</option><option value="390*844">iPhone 12 Pro</option><option value="360*740" selected="selected">Galaxy S8+</option><option value="280*653">Galaxy Fold</option></select></div><div class="pub-screen"><button type="button"></button><div class="link"></div></div><div class="pub-iframe"></div><button type="button" class="pub-frame-toggle"><span>닫기</span></button></div></div><div class="pub-modify"></div>');
		$('.pub-wrap .pub-header .pub-title').after('<div class="pub-side"><div class="pub-side-inr"><div class="pub-total"></div><div class="pub-legend"><div class="pub-group"><div class="pub-record"></div><div class="pub-search"><input type="text" placeholder="메뉴명"><span class="pub-search-btn"></span></div><button type="button" class="pub-viewer" aria-pressed="false"></button><button type="button" aria-pressed="false" class="pub-toggle"></button></div><ul class="pub-label"><li class="end" title="개발 진행(수정이력 제공)"><em>완료일</em></li><li class="end yesterday"><button type="button"><em>전일</em></button></li><li class="modify" title="퍼블 파일내 수정일자(YYYY-MM-DD) 검색"><em>수정일</em></li><li class="modify yesterday"><button type="button"><em>전일</em></button></li><li class="history"><button type="button" class="pub-modify-open"></button></li></ul></div></div></div>');

		/* CONTENT */
		if (env=='0') $('.pub-viewer, .pub-mobile-frame').remove();
		if (tab!='0') $('.pub-tab-list').show();
		if (scn=='0') $('.pub-site .pub-table .screen').remove();
		if (wbs=='0') $('.pub-site .pub-table .wbs').remove();
		if (pub=='0') $('.pub-site .pub-table .publisher').remove();
		if (pla=='0') $('.pub-site .pub-table .planner').remove();
		if (dev=='0') $('.pub-site .pub-table .developer').remove();
		if (fin!='0') $('.pub-wrap').addClass('fin');

		var now=new Date(),
			year=now.getFullYear(),
			mon=(now.getMonth()+1)>9 ? ''+(now.getMonth()+1):'0'+(now.getMonth()+1),
			day=now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate(),
			today=Number(year+mon+day),
			nowLastDay=(new Date(year, mon, 0)).getDate(),
			nowLastDate=Number(year+mon+nowLastDay),
			prevMon=(now.getMonth()+1)>9 ? ''+(now.getMonth()):'0'+(now.getMonth()),
			prevLastDay=(new Date(year, mon-1, 0)).getDate(),
			prevLastDate=Number(year+prevMon+prevLastDay),
			nextMon=(now.getMonth()+1)>9 ? ''+(now.getMonth()+2): '0'+(now.getMonth()+2),
			nextFirstDate=Number(year+nextMon+'0'+1);
		var week=['일', '월', '화', '수', '목', '금', '토'],
			monday='월',
			dayOfWeek=week[new Date(now).getDay()];
		$('.pub-site .pub-table .pub-tbody tbody').each(function() {
			var self=$(this).children('tr:not(.sb)'),
				thisCounter=self.length;
			for (var i=0; i<=thisCounter; i++) self.eq(i).prepend('<td class="no"><span>'+(i+1)+'</span></td>');
		});
		$('.pub-site .pub-table .pub-tbody td.state').each(function() {
			var self=$(this),
				text=self.text(),
				textDate=Number(text.replace(/-/g,''));
			if (self.html()!='' && !self.closest('tr').hasClass('ing')) self.html('<em><span>'+text+'</span></em>');
			if (textDate==today && !self.closest('tr').hasClass('del')) self.addClass('today');
			else if (textDate==today-1 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (day=='01' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && textDate==today-2 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && textDate==today-3 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate-1 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate-2 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && day=='02' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && day=='02' && textDate==prevLastDate-1 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			else if (dayOfWeek==monday && day=='03' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			$.each(holiday, function(index, item) {
				var item=item.replace(/\-/g, '');
				if (item==today-1 && textDate==today-2 && !self.closest('tr').hasClass('del')) self.addClass('yesterday');
			});
			if (self.html()!='') {
				var week2=week[new Date(text).getDay()];
				if (week2!=undefined) self.find('span').parent().append('('+week2+')');
			}
		});
		$('.pub-site .pub-table .pub-tbody td.modify li').each(function() {
			var self=$(this).find('span'),
				text=self.text(),
				textDate=Number(text.replace(/-/g,''));
			if (textDate==today && !self.closest('tr').hasClass('del')) self.closest('li').addClass('today');
			else if (textDate==today-1 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (day=='01' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && textDate==today-2 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && textDate==today-3 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate-1 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate-2 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && day=='02' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && day=='02' && textDate==prevLastDate-1 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			else if (dayOfWeek==monday && day=='03' && textDate==prevLastDate && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			$.each(holiday, function(index, item) {
				var item=item.replace(/\-/g, '');
				if (item==today-1 && textDate==today-2 && !self.closest('tr').hasClass('del')) self.closest('li').addClass('yesterday');
			});
			if (self.html()!='') {
				var modify=self.next('p').text(),
					week2=week[new Date(text).getDay()];
				self.closest('li').attr('title', modify);
				self.wrap('<em></em>').parent().append('('+week2+')');
			}
		});
		var depth='dep'+parseInt(dep);
		$('.pub-wrap .pub-table [class*=dep]').each(function() {
			if ($(this).hasClass(depth)) $(this).addClass('last');
			if ($(this).hasClass('last')) $(this).find('~ [class*=dep]').remove();
		});
		$('.pub-site .pub-table .pub-tbody tr').each(function() {
			var self=$(this),
				selfState=self.find('td.state').text(),
				selfSb=self.attr('data-sb'),
				colNum=$('.pub-site:first .pub-table .pub-tbody tr:last td:visible').length;
			if (self.find('td.id').html()=='' && !self.hasClass('del')) self.removeClass('ing chk end').addClass('wait');
			if (!self.closest('.pub-site').hasClass('nocount') && self.hasClass('wait')) $(this).find('td.state').html('<em>대기</em>');
			if (self.hasClass('ing')) $(this).find('td.state').html('<em>퍼블중</em>');
			if (self.hasClass('chk')) $(this).find('td.state').html('<em>검수중</em>');
			if (self.hasClass('del') && selfState.indexOf('-')==-1) $(this).find('td.state em').remove();
			if (self.find('td.screen span').html()=='') self.find('td.screen span').remove();
			if (self.find('td.modify li').length>1) self.find('td.modify ul').before('<button type=\"button\" aria-pressed=\"false\"></button>');
			if (self.find('td.modify li p').html()=='') self.find('td.modify ul').remove();
			if ($(self).attr('data-sb').length) self.before('<tr class="sb"><td colspan="'+ colNum +'"><strong>'+ selfSb +'</strong></td></tr>');
			self.removeAttr('data-sb');
		});
		$('.pub-site .pub-table .pub-tbody td.modify').each(function() {
			var self=$(this);
			if (self.find('li').length>1) {
				if (!self.closest('.pub-table').find('.pub-thead th.modify button').length) self.closest('.pub-table').find('.pub-thead th.modify').append('<button type=\"button\" aria-pressed=\"false\"></button>');
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
		$('.pub-site .pub-table .pub-tbody td[class*="dep"] span').each(function() {
			var self=$(this);
			if (self.html()=='') self.remove();
		});
		$('.pub-header .pub-record').each(function() {
			var self=$(this);
			self.append('<button type="button" aria-expanded="false"># 전체</button><div class="pub-option"><button type="button" data-value="optionAll" class="on"># 전체</button><div class="pub-option-inr"><div class="progress"></div><div class="type"></div><div class="wbs"></div><div class="pub-team"></div></div></div>');
			if (wbs=='0') self.find('.wbs').remove();
			if (pla=='0' && dev=='0' && pub=='0') self.find('.pub-team').remove();
			if (fin=='1') self.find('.wbs, .pub-team').remove();
		});
		$(document).on('click', '.pub-header .pub-record>button', function() {
			var self=$(this),
				spd=200;
			if (self.attr('aria-expanded')=='false') {
				self.attr('aria-expanded', 'true').next().slideDown(spd);
			} else {
				self.attr('aria-expanded', 'false').next().slideUp(spd);
				setTimeout(function() {
					if ($('.pub-record .pub-option>button').hasClass('on')) {
						$('.pub-record a').removeClass('on').next().hide();
						$('.pub-record .progress a').addClass('on').next().show();
					} else {
						$('.pub-record button.on').closest('div').show().prev().addClass('on').parent().siblings().find('a.on').removeClass('on').next().hide();
					}
				}, spd);
			}
		});
		$(document).stop().on('click', '.pub-header .pub-record .pub-option button', function() {
			var self=$(this),
				selfText =self.text();
			$('.pub-record .pub-option button').removeClass('on');
			$(this).addClass('on').closest('.pub-option').slideUp(200).prev().attr('aria-expanded', 'false');
			if (self.attr('data-value')=='optionAll') {
				$('.pub-header .pub-record>button').removeClass('on').html(selfText);
				self.next('.pub-option-inr').find('button').removeClass('on');
				self.next('.pub-option-inr').find('a').removeClass('on').next().hide();
				self.next('.pub-option-inr').find('.progress a').addClass('on').next().show();
			}
			else $('.pub-header .pub-record>button').addClass('on').html(selfText);
			$('.pub-header .pub-search input').val('');
		});

		$('.pub-wrap .pub-header .pub-total').each(function() {
			var url=0, del=0, state=0, stateDel=0, wait=0, ing=0, check=0, endYesterday=0, endYesterdayDel=0, modifyYesterday=0, modifyYesterdayDel=0;
			$('.pub-site:not(.nocount) .pub-table .pub-tbody td.url').each(function() {
				if ($(this).html()!='') url++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.del td.url').each(function() {
				if ($(this).html()!='') del++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody td.state').each(function() {
				if ($(this).html()!='') state++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.del td.state').each(function() {
				if ($(this).html()!='') stateDel++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.wait').each(function() {
				if ($(this).html()!='') wait++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.ing:not(.chk)').each(function() {
				if ($(this).html()!='') ing++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr.chk').each(function() {
				if ($(this).html()!='') check++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr').each(function() {
				if ($(this).find('.state.yesterday').length>0) endYesterday++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr:not(.end)').each(function() {
				if ($(this).find('.state.yesterday').length>0) endYesterdayDel++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr').each(function() {
				if ($(this).find('.modify .yesterday').length>0) modifyYesterday++;
			});
			$('.pub-site:not(.nocount) .pub-table .pub-tbody tr:not(.end)').each(function() {
				if ($(this).find('.modify .yesterday').length>0) modifyYesterdayDel++;
			});
			count1=(url-del);
			count2=(state-stateDel)-(wait)-(ing)-(check);
			count3=(state-stateDel)-(wait);
			count4=(wait);
			count5=(ing);
			count6=(check);
			var nanValue1=((count2/count1)*100).toFixed(1),
				nanValue2=((count3/count1)*100).toFixed(1),
				nanValue3=((count4/count1)*100).toFixed(1),
				nanValue4=((count5/count1)*100).toFixed(1),
				nanValue5=((count6/count1)*100).toFixed(1);
			if (isNaN(nanValue1)) nanValue1=0;
			if (isNaN(nanValue2)) nanValue2=0;
			if (isNaN(nanValue3)) nanValue3=0;
			if (isNaN(nanValue4)) nanValue4=0;
			if (isNaN(nanValue5)) nanValue5=0;

			//total
			$(this).prepend('<strong>'+count3+'<span>/'+count1+'</span><span>('+del+')</span></strong><em><span>진척률<strong>'+nanValue2+'</strong>%</span><button type="button" class="pub-button-detail" aria-expanded="false"></button></em><ul class="pub-total-layer"><li class="end"><em>완료<span>('+count2+')</span></em><span><strong>'+nanValue1+'</strong>%</span></li><li class="ing"><em>퍼블중<span>('+count5+')</span></em><span><strong>'+nanValue4+'</strong>%</span></li><li class="wait"><em>대기<span>('+count4+')</span></em><span><strong>'+nanValue3+'</strong>%</span></li></ul>');
			if (chk!='0') $('.pub-total .pub-total-layer li.ing').before('<li class="chk"><em>검수중<span>('+count6+')</span></em><span><strong>'+nanValue5+'</strong>%</span></li>');

			//sorting
			$('.pub-header .pub-side .progress').append('<a href="javascript:void(0)" class="on"><strong>진행상태</strong></a><div style="display:block;"><ul><li><button type="button" data-value="option1_0"><em>진행</em></button></li><li class="end"><button type="button" data-value="option1_1"><em>완료</em></button></li><li class="ing"><button type="button" data-value="option1_4"><em>퍼블중</em></button></li><li class="wait"><button type="button" data-value="option1_3"><em>대기</em></button></li><li><button type="button" data-value="option1_6"><em>삭제</em></button></li><li><button type="button" data-value="option1_7"><em>지연</em></button></li></ul></div>');
			if (chk!='0') $('.pub-header .pub-record .pub-option li.ing').before('<li class="chk"><button type="button" data-value="option1_5"><em>검수중</em></button></li>');

			$('.pub-header .pub-side .progress button').each(function() {
				if ($(this).attr('data-value')=='option1_0') $(this).append('<span>('+(count2+count6+count5)+')</span>'); //진행
				if ($(this).attr('data-value')=='option1_1') $(this).append('<span>('+(count2)+')</span>'); //완료
				if ($(this).attr('data-value')=='option1_4') $(this).append('<span>('+(count5)+')</span>'); //퍼블중
				if ($(this).attr('data-value')=='option1_5') $(this).append('<span>('+(count6)+')</span>'); //검수중
				if ($(this).attr('data-value')=='option1_3') $(this).append('<span>('+(count4)+')</span>'); //대기
				if ($(this).attr('data-value')=='option1_6') $(this).append('<span>('+(del)+')</span>'); //삭제
			});
			$('.pub-header .pub-legend').each(function() {
				var eYesterday=endYesterday-endYesterdayDel,
					mYesterday=modifyYesterday-modifyYesterdayDel;
				if (eYesterday!='0') $(this).find('.end.yesterday').append('<strong class="pub-alarm"><span>'+eYesterday+'</span></strong>');
				else $(this).find('.end.yesterday button').attr('disabled', true);
				if (mYesterday!='0') $(this).find('.modify.yesterday').append('<strong class="pub-alarm"><span>'+mYesterday+'</span></strong>');
				else $(this).find('.modify.yesterday button').attr('disabled', true);
			});
		});
		$('.pub-site').each(function() {
			$(this).find('.pub-site-title').append('<div class="pub-total"></div>');
			if (!$(this).hasClass('nocount')) {
				var url=0, del=0, state=0, stateDel=0, wait=0, ing=0, check=0;
				$(this).find('td.url').each(function() {
					if ($(this).html()!='') url++;
				});
				$(this).find('tr.del td.url').each(function() {
					if ($(this).html()!='') del++;
				});
				$(this).find('td.state').each(function() {
					if ($(this).html()!='') state++;
				});
				$(this).find('tr.del td.state').each(function() {
					if ($(this).html()!='') stateDel++;
				});
				$(this).find('tr.wait').each(function() {
					if ($(this).length) wait++;
				});
				$(this).find('tr.ing:not(.chk)').each(function() {
					if ($(this).length) ing++;
				});
				$(this).find('tr.chk').each(function() {
					if ($(this).length) check++;
				});
				count1=(url-del);
				count2=(state-stateDel)-(wait)-(ing)-(check);
				count3=(state-stateDel)-(wait);
				count4=(wait);
				count5=(ing);
				count6=(check);
				var nanValue=((count3)/count1*100).toFixed(1);
				if (isNaN(nanValue)) nanValue=0;

				//total
				$(this).find('h2>span').after('<p><span>전체</span><strong>'+count1+'<span>('+del+')</span></strong>,<span>진행</span><strong>'+count3+'</strong><em>(<span class="end">완료</span><strong>'+count2+'</strong>,<span class="ing">퍼블중</span><strong>'+count5+'</strong>)</em>,<span class="wait">대기</span><strong>'+count4+'</strong></p>');
				if (chk!='0') $('.pub-site .pub-site-title h2 p span.ing').before('<span class="chk">검수중</span><strong>'+count6+'</strong>,');

				$(this).find('.pub-site-title .pub-total').prepend('<em><span>진척률<strong>'+nanValue+'</strong>%</span>');
				$(this).find('.pub-progress').append('<span style="width:'+nanValue+'%"></span>');
			}
		});

		//유형
		var types=new Array();
		$('.pub-site .pub-table .pub-tbody td.type').each(function(index, item) {
			var text=$(this).text();
			if (text.length && !$(this).closest('tr').hasClass('del')) types.push($(item).text());
		});
		if (types.length) {
			$('.pub-header .pub-side .type').append('<a href="javascript:void(0)"><strong>유형</strong></a><div><ul></ul></div>');
			var uniq=types.sort(function(a,b) {return a > b ? -1 : a < b ? 1 : 0;});
			$.each(uniq.reverse(), function(e, i) {
				var i=i.toUpperCase();
				$('.pub-header .pub-side .type ul').append('<li><button type="button" data-value="optionType">'+i+'</button></li>');
			});
		}
		var typeOverlap=[];
		$($('.pub-header .pub-record .pub-option .type li').get().reverse()).each(function(index, item) {
			var selfText=$(this).text();
			if ($.inArray(selfText, typeOverlap)===-1) typeOverlap.push(selfText);
			else $(this).remove();
		});

		//작업자
		if (pla!='0' || dev!='0' || pub!='0') $('.pub-header .pub-side .pub-team').html('<a href="javascript:void(0)"><strong>작업자</strong></a><div></div>');
		if (pla!='0') {
			var planner=new Array();
			if ($('.pub-site .pub-table .pub-tbody td.planner').text().length) $('.pub-header .pub-side .pub-team>div').append('<ul class="planner"></ul>');
			$('.pub-site .pub-table .pub-tbody td.planner').each(function(index, item) {
				if ($(this).text().length) {planner.push($(item).text());}
			});
			if (planner.length) {
				function unique(planner) {
					var result=[];
					$.each(planner.sort(), function(index, element) {
						if ($.inArray(element, result)==-1) result.push(element);
					});
					return result;
				}
				$.each(unique(planner), function(e, i) {
					$('.pub-header .pub-side .pub-team ul.planner').append('<li><button type="button" data-value="optionPla">'+i+'</button></li>');
				});
			}
		}
		if (dev!='0') {
			var developer=new Array();
			if ($('.pub-site .pub-table .pub-tbody td.developer').text().length) $('.pub-header .pub-side .pub-team>div').append('<ul class="developer"></ul>');
			$('.pub-site .pub-table .pub-tbody td.developer').each(function(index, item) {
				if ($(this).text().length) {developer.push($(item).text());}
			});
			if (developer.length) {
				function unique(developer) {
					var result=[];
					$.each(developer.sort(), function(index, element) {
						if ($.inArray(element, result)==-1) result.push(element);
					});
					return result;
				}
				$.each(unique(developer), function(e, i) {
					$('.pub-header .pub-side .pub-team ul.developer').append('<li><button type="button" data-value="optionDev">'+i+'</button></li>');
				});
			}
		}
		if (pub!='0') {
			var publisher=new Array();
			if ($('.pub-site .pub-table .pub-tbody td.publisher').text().length) $('.pub-header .pub-side .pub-team>div').prepend('<ul class="publisher"></ul>');
			$('.pub-site .pub-table .pub-tbody td.publisher').each(function(index, item) {
				if ($(this).text().length) {publisher.push($(item).text());}
			});
			if (publisher.length) {
				function unique(publisher) {
					var result=[];
					$.each(publisher.sort(), function(index, element) {
						if ($.inArray(element, result)==-1) result.push(element);
					});
					return result;
				}
				$.each(unique(publisher), function(e, i) {
					$('.pub-header .pub-side .pub-team ul.publisher').append('<li><button type="button" data-value="optionPub">'+i+'</button></li>');
				});
			}
		}
		if ($('.pub-header .pub-side .pub-team ul').length!=1) $('.pub-header .pub-side .pub-team').addClass('on');
		if ($('.pub-header .pub-side .pub-team > div').text().length==0) $('.pub-header .pub-side .pub-team').remove();

		//완료예정일
		var dates=new Array();
		$('.pub-site .pub-table .pub-tbody td.wbs').each(function(index, item) {
			var self=$(this),
				text=self.text(),
				textDate=Number(text.replace(/-/g,''));
			self.html('<em><span>'+text+'</span></em>');
			if (today==textDate && !self.closest('tr').hasClass('del') && !self.closest('tr').hasClass('chk') && !self.closest('tr').hasClass('end') && self.find('span').html()!='') self.addClass('hurry');
			if (today==textDate-1 && !self.closest('tr').hasClass('del') && !self.closest('tr').hasClass('chk') && !self.closest('tr').hasClass('end') && self.find('span').html()!='') self.addClass('hurry');
			if (today==nowLastDate && textDate==nextFirstDate && !self.closest('tr').hasClass('del') && !self.closest('tr').hasClass('chk') && !self.closest('tr').hasClass('end') && self.find('span').html()!='') self.addClass('hurry');
			if (today>textDate && !self.closest('tr').hasClass('del') && !self.closest('tr').hasClass('chk') && !self.closest('tr').hasClass('end') && self.find('span').html()!='') self.addClass('delay');
			if (!self.closest('tr').hasClass('del')) {
				if (text.length) {dates.push($(item).text().replace(/-/g,''));}
			}
			if (self.find('span').html()!='') {
				var week2=week[new Date(text).getDay()];
				self.find('em').append('('+week2+')');
			}
		});
		if (dates.length) {
			$('.pub-header .pub-side .wbs').append('<a href="javascript:void(0)"><strong>완료예정일</strong></a><div><ul></ul></div>');
			var uniq=dates.slice().sort(function(a,b) {return a-b;}).reduce(function(a,b) {if(a.slice(-1)[0]!=b) a.push(b); return a;}, []);
			$.each(uniq.reverse(), function(e, i) {
				$('.pub-header .pub-side .wbs ul').append('<li><button type="button" data-value="optionDate">'+i+'</button></li>');
			});
			var sels=$('.pub-header .pub-side .wbs li button');
			sels.each(function() {
				var text=$(this).text(),
				selectD=text.slice(0,4)+'-'+text.slice(4,6)+'-'+text.slice(6,8);
				$(this).text(selectD);
			});
		}

		$('.pub-header .pub-label li.end.yesterday button').stop().on('click', function() {
			var self=$(this);
			$('html,body').animate({scrollTop: 0}, 200);
			if (!self.hasClass('on')) {
				$('.pub-header .pub-record .pub-option > button').trigger('click');
				$('.pub-site .pub-table .pub-tbody tr').each(function() {
					if ($(this).find('td.state').hasClass('yesterday')) $(this).css('display','');
					else $(this).hide();
				});
			} else {
				$('.pub-site .pub-table .pub-tbody tr').css('display','');
			}
			$(this).toggleClass('on');
			$('.pub-header .pub-label li.modify.yesterday button').removeClass('on');
		});
		$('.pub-header .pub-label li.modify.yesterday button').stop().on('click', function() {
			var self=$(this);
			$('html,body').animate({scrollTop: 0}, 200);
			if (!self.hasClass('on')) {
				$('.pub-header .pub-record .pub-option > button').trigger('click');
				$('.pub-site .pub-table .pub-tbody tr').each(function() {
					if ($(this).find('td.modify li').hasClass('yesterday')) $(this).css('display','');
					else $(this).hide();
				});
			} else {
				$('.pub-site .pub-table .pub-tbody tr').css('display','');
			}
			$(this).toggleClass('on');
			$('.pub-header .pub-label li.end.yesterday button').removeClass('on');
		});
		$('.pub-header .pub-record .pub-option button').on('click', function() {
			var self=$(this),
				selfText=self.text();
			$('html,body').animate({scrollTop: 0}, 200);
			$('.pub-site .pub-table').parent().removeClass('fixed');
			$('.pub-site .pub-table .pub-tbody tr').each(function() {
				if (self.attr('data-value')=='optionAll') {
					$(this).css('display','');
				} else if (self.attr('data-value')=='option1_0') { //진행
					if (!$(this).closest('.pub-site').hasClass('nocount') && !$(this).hasClass('wait') && !$(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='option1_1') { //완료
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('td.url').html()!='' && $(this).find('td.state').html()!='' && !$(this).hasClass('wait') && !$(this).hasClass('ing') && !$(this).hasClass('chk') && !$(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='option1_5') { //검수중
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('chk') && !$(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='option1_4') { //퍼블중
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('ing') && !$(this).hasClass('chk') && !$(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='option1_3') { //대기
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('wait') && !$(this).hasClass('chk') && !$(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='option1_6') { //삭제
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='option1_7') { //지연
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('td.wbs').hasClass('delay') && !$(this).hasClass('del') && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='optionType') { //유형
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.type span').text()==selfText && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='optionPla') { //기획자
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.planner').text()==selfText && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='optionDev') { //개발자
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.developer').text()==selfText && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='optionPub') { //퍼블리셔
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.publisher').text()==selfText && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				} else if (self.attr('data-value')=='optionDate') { //완료예정일
					if (!$(this).closest('.pub-site').hasClass('nocount') && $(this).find('.wbs span').text()==selfText && !$(this).hasClass('sb')) $(this).css('display','');
					else $(this).hide();
				}
			});
		});
		$(document).on('click', '.pub-header .pub-record .pub-option a', function() {
			var self=$(this),
				spd=300;
			self.addClass('on').next().slideDown(spd).parent().siblings().find('a').removeClass('on').next().slideUp(spd);
		});

		$('.pub-site .pub-table .pub-tbody td.id').each(function() {
			var id=$(this).text(),
				id2=id.split('/',1),
				url=$(this).closest('tr').find('.url').text(),
				path=window.location.href;
			if (ext=='html') {
				if ($(this).closest('tr').find('.url').html()=='') path=path.substring(0, path.lastIndexOf(id2));
				else path='..'+path.substring(0, path.lastIndexOf(id2));
			}
			if (ext=='xml') path=path.substring(0, path.lastIndexOf('=')+1);
			var href=path+url+id;
			if ($(this).html()!='') $(this).html('<a href="'+href+'.'+ext+'" target="_blank"><strong>'+id+'</strong></a>');
			$(this).find('a').on('click', function() {
				$('.pub-site .pub-table .pub-tbody td.id a').removeClass('active');
				$(this).addClass('active');
				//모바일뷰
				if ($('.pub-viewer').attr('aria-pressed')=='true') {
					if (!$('#isMobile').length) {
						$('.pub-mobile-frame .pub-screen .link').html('<a href="'+href+'.'+ext+'" target="_blank"><strong>'+id+'</strong></a>');
						mobileFrameAction();
						$('.pub-mobile-frame .pub-iframe').html('<iframe src="'+href+'.'+ext+'" frameborder="0">');
						$('.pub-mobile-frame .pub-iframe iframe').contents().find('head').append('<style>body::-webkit-scrollbar {width:0;height:0;}</style>');
						return false;
					}
				}
			});
		});

		var idArray1=[];
		$('.pub-site .pub-table .pub-tbody tr:not(.del) td.id a').each(function(index, item) {
			var selfText = $(this).text();
			if ($.inArray(selfText, idArray1)===-1) idArray1.push(selfText);
			else $(this).closest('tr').addClass('overlap-id');
		});
		var idArray2=[];
		$($('.pub-site .pub-table .pub-tbody tr:not(.del) td.id a').get().reverse()).each(function(index, item) {
			var selfText = $(this).text();
			if ($.inArray(selfText, idArray2)===-1) idArray2.push(selfText);
			else $(this).closest('tr').addClass('overlap-id');
		});
		$('.pub-mobile-frame .pub-screen button').on('click', function() {
			$('.pub-mobile-frame iframe').attr('src', $('.pub-mobile-frame iframe').attr('src'));
		});
		$('.pub-mobile-frame select').each(function() {
			frame();
			$(this).on('change', function() { frame(); });
		});
		function frame() {
			var self=$('.pub-mobile-frame select'),
				frame=self.closest('.pub-mobile-frame').find('.pub-iframe'),
				option=self.find('option:selected').val(),
				optionStr=option.split('*');
			self.attr('title', option);
			frame.css({'width': optionStr[0], 'height': optionStr[1]});
		}
		$('.pub-header .pub-side .progress button').each(function() {
			var delayCount=$('.pub-site .pub-table .pub-tbody td.delay').length;
			if ($(this).attr('data-value')=='option1_7') $(this).append('<span>('+(delayCount)+')</span>'); //지연
		});
		$('.pub-site .pub-table .pub-tbody td.dep2').each(function() {
			text=$(this).text();
			if (text!=$(this).parent().next().find('td.dep2').text()) $(this).parent().next().addClass('first');
		});
		$('.pub-site .pub-table .pub-tbody tr').each(function() {
			if (($(this).find('td.state').html()!='' && !$(this).hasClass('wait') && $(this).find('td.publisher').html()=='') || ($(this).hasClass('ing') && !$(this).hasClass('wait') && $(this).find('td.publisher').html()=='')) $(this).find('td.publisher').addClass('worker').html('작업자');
			if (($(this).find('td.state').html()!='' && !$(this).hasClass('wait') && !$(this).hasClass('ing') && !$(this).hasClass('chk') && $(this).find('td.developer').html()=='')) $(this).find('td.developer').addClass('define').html('작업자');
			thisDepth=new Array();
			prevDepth=new Array();
			var self=$(this),
				thisDepTotal=self.children('td[class*=dep]').length;
			for (var i=1;i<=thisDepTotal+1;i++) {
				thisDepth[i]=self.find('td.dep'+i);
				prevDepth[i]=self.prev('tr').find('td.dep'+i);
				if (thisDepth[i].text()!=prevDepth[i].text() || self.hasClass('first')) thisDepth[i].addClass('overlap-dep');
				else if (self.prev().hasClass('del') && !self.hasClass('del') && thisDepth[i].html()!='') thisDepth[i].addClass('overlap-dep');
			}
		});
		$('.pub-site .pub-table .pub-tbody td.type').each(function() {
			var self=$(this),
				text=self.text(),
				text=text.toUpperCase();
			if ($(this).html()!='') self.html('<span>'+text+'</span>');
			self.find('span:contains("M")').attr('title', '본문');
			self.find('span:contains("T")').attr('title', '탭');
			self.find('span:contains("P")').attr('title', '팝업');
			self.find('span:contains("CP")').attr('title', '센터팝업');
			self.find('span:contains("FP")').attr('title', '풀팝업');
			self.find('span:contains("BP")').attr('title', '바텀팝업');
		});
		$('.pub-total .pub-button-detail').on('click', function() {
			if ($(this).attr('aria-expanded')=='false') {
				$('.pub-total .pub-button-detail').attr('aria-expanded', 'false');
				$('.pub-total').parent().parent().removeClass('on');
				$(this).attr('aria-expanded', 'true').closest('.pub-total').parent().parent().addClass('on');
			}
			else $(this).attr('aria-expanded', 'false').closest('.pub-total').parent().parent().removeClass('on');
		});
		$('.pub-header .pub-toggle').on('click', function() {
			$('.pub-nav .pub-all a').trigger('click');
			if ($(this).attr('aria-pressed')=='false') {
				$(this).attr('aria-pressed', 'true');
				$('.pub-site .pub-table').hide();
			} else {
				$(this).attr('aria-pressed', 'false');
				$('.pub-site .pub-table').show();
			}
		});

		//목록복사
		$('.pub-site .pub-table .pub-tbody td.id').each(function() {
			var self=$(this);
			self.append('<button type="button" class="pub-copy"></button>')
		});
		$('.pub-site .pub-table .pub-tbody td .pub-copy').on('click', function() {
			var self=$(this),
				dep1=self.closest('.pub-site').find('.pub-site-title h2 > span').text(),
				dep2=self.closest('tr').find('td.dep2').text(),
				dep3=self.closest('tr').find('td.dep3').text(),
				dep4=self.closest('tr').find('td.dep4').text(),
				dep5=self.closest('tr').find('td.dep5').text(),
				dep6=self.closest('tr').find('td.dep6').text(),
				type=self.closest('tr').find('td.type').text(),
				id=self.closest('tr').find('td.id').text();
			if (dep2) var dep2=' > ' + dep2;
			if (dep3) var dep3=' > ' + dep3;
			if (dep4) var dep4=' > ' + dep4;
			if (dep5) var dep5=' > ' + dep5;
			if (dep6) var dep6=' > ' + dep6;
			if (type) var type='(' + type + ') ';
			var screen=dep1+dep2+dep3+dep4+dep5+dep6+" : "+type+id;
			$('body').append('<textarea id="pub-screen-textarea"></textarea>');
			$('#pub-screen-textarea').val(screen).select();
			document.execCommand('Copy');
			$('#pub-screen-textarea').remove();
			clipboardCopyMsg();
		});

		//모바일뷰
		var thisFrame=$('.pub-mobile-frame'),
			thisFrameInner=thisFrame.find('.pub-mobile-frame-inr'),
			thisWidth=thisFrameInner.outerWidth(),
			btnWidth=$('.pub-frame-toggle').outerWidth();
		thisFrame.css('visibility', 'visible');
		thisFrameInner.css('right', -thisWidth);
		$('.pub-viewer').on('click', function () {
			if ($(this).attr('aria-pressed')=='false') $(this).attr('aria-pressed', 'true');
			else $(this).attr('aria-pressed', 'false');
			var nowFrame=$('.pub-mobile-frame .pub-mobile-frame-inr'),
				nowWidth=nowFrame.outerWidth();
			if ($('.pub-viewer').attr('aria-pressed')=='true') nowFrame.css('right', -nowWidth + btnWidth);
			else $('.pub-mobile-frame').removeClass('on').find('.pub-mobile-frame-inr').css('right', -nowWidth);
		});
		thisFrame.find('.pub-frame-toggle').on('click', function () {
			mobileFrameAction();
			var frame=$(this).closest('.pub-mobile-frame'),
				frameInner=frame.find('.pub-mobile-frame-inr'),
				width=frameInner.outerWidth();
			if (frame.hasClass('on')) frameInner.animate({ right: -width + btnWidth }, 0, function () {
				frame.removeClass('on');
			});
		});
		function mobileFrameAction() {
			thisFrameInner.animate({right: 12}, 100, function () {
				thisFrame.addClass('on');
			});
		}
		$(window).on('resize', function () {
			if ($('html').attr('id')=='isMobile') {
				if ($('.pub-viewer').attr('aria-pressed')=='true') thisFrameInner.css('right', -thisFrameInner.outerWidth() + btnWidth);
				else thisFrameInner.css('right', -thisFrameInner.outerWidth() - btnWidth);
				thisFrame.removeClass('on');
			}
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

		//수정이력
		var groupBy=function groupBy(data, key) {
			return data.reduce(function (carry, el) {
				var group=el[key];
				if (carry[group]==undefined) {
					carry[group]=[];
				}
				carry[group].push(el);
				return carry;
			}, {});
		};
		function showModifyList() {
			var a=$('.pub-site:not(.nocount) .pub-table .pub-tbody tr:not(.del):not(.ing):not(.chk) .modify span').filter(':contains(20)').toArray().map(function (el) {
				var $el=$(el).closest('li'),
					$title=$(el).closest('.pub-site').find('.pub-site-title h2>span'),
					$tr=$(el).closest('tr'),
					date=$(el).text().trim().split('(')[0],
					modify=$el.find('p').text().trim(),
					url=$tr.find('.url').text(),
					id=$tr.find('.id a').text(),
					href=url+id+'.'+ext,
					dep='';
				if (dev!=0) {
					var developer=$tr.find('.developer').text();
					if ($title.text()) dep += '' + $title.text();
					if ($tr.find('.dep2').text()) dep += '<span> > </span>' + $tr.find('.dep2').text();
				} else {
					var developer=$tr.closest('.pub-site').find('.pub-site-title h2>span').text();
					if ($tr.find('.dep2').text()) dep += '' + $tr.find('.dep2').text();
				}
				if ($tr.find('.dep3').text()) dep += '<span> > </span>' + $tr.find('.dep3').text();
				if ($tr.find('.dep4').text()) dep += '<span> > </span>' + $tr.find('.dep4').text();
				if ($tr.find('.dep5').text()) dep += '<span> > </span>' + $tr.find('.dep5').text();
				if ($tr.find('.dep6').text()) dep += '<span> > </span>' + $tr.find('.dep6').text();
				if ($tr.find('.screen').text()) dep += '<span> > </span>' + $tr.find('.screen').text();
				dep=dep.trim();
				return { date: date, developer: developer, dep: dep, modify: modify, href: href };
			});
			var b=groupBy(a, 'date');
			var result=[];
			for (var strDate in b) {
				var c=b[strDate];
				if (Array.isArray(c)) {
					var d=groupBy(c, 'developer');
					result.push({ date: strDate, group: d });
				}
			}
			result=result.sort(function (a, b) {
				return new Date(a.date).getTime() - new Date(b.date).getTime();
			});
			var resultObj=result.map(function (day) {
				var list='';
				var arrItem=[];
				for (var member in day.group) {
					var item=day.group[member];
					arrItem.push({ name: member, group: item });
				}
				arrItem=arrItem.sort(function (a, b) {
					return a.name.localeCompare(b.name);
				});
				arrItem.map(function (dd) {
					var content=dd.group.map(function (ee) {
						return '메뉴 : ' + ee.dep + '<br>\n파일 : ' + ee.href + '<br>\n설명 : ' + ee.modify + '<br><br>';
					}).join('\n\n');
					list += '\n<br>\n<strong>[' + dd.name + ']</strong>\n' + content;
				});
				return {
					date: day.date,
					list: list
				};
			});
			var resultHTMLHead=resultObj.map(function (html, index) {
				if (resultObj.length - 1==index) return '<option selected>' + html.date + '</option>';
				else return '<option>' + html.date + '</option>';
			}).join('');
			var announcement=String('안녕하세요. 퍼블팀입니다.\n수정이력이 있어서 관련내용 공유드립니다.\n※ 퍼블 업데이트후 파일내 수정일(YYYY-MM-DD)을 검색하세요.\n※ 동일이력이 있을 수 있으니 전반적으로 검색해주세요.\n\n');
			if (typeof announcement === 'undefined') { 
				var resultHTMLBody=resultObj.map(function (html) {
					return '<div class="mb-' + html.date + '"><mark><em>' + html.date + '</em></mark><br>' + html.list + '</div>';
				}).join('');
			} else {
				var resultHTMLBody=resultObj.map(function (html) {
					return '<div class="mb-' + html.date + '"><div class="pub-announcement">' + announcement +'</div><mark><em>' + html.date + '</em></mark><br>' + html.list + '</div>';
				}).join('');
			}
			$('.pub-modify').html('<div class="pub-modify-inr"><select multiple>' + resultHTMLHead + '</select><div class="pub-modify-list">' + resultHTMLBody + '</div><button type="button" class="pub-modify-copy">복사</button><button type="button" class="pub-modify-close"><span></span><span></span><span></span></button></div>');
			$('.pub-modify select').off('change').on('change', function (e) {
				var val=$(this).val();
				$('.pub-modify-list>div').hide();
				if (val!=null) {
					val.forEach(function (item) {
						$('.pub-modify-list .mb-' + item).show();
					});
				}
				$(window).scrollTop(0);
			}).trigger('change');
			$('.pub-modify .pub-modify-list mark').each(function () {
				var self=$(this),
					text=self.text(),
					textDate=text.replace(/-/g,'');
				if (textDate==today) self.parent().addClass('today');
				else if (textDate==today-1) self.parent().addClass('yesterday');
				else if (day=='01' && textDate==prevLastDate) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && textDate==today-2) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && textDate==today-3) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate-1) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && day=='01' && textDate==prevLastDate-2) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && day=='02' && textDate==prevLastDate) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && day=='02' && textDate==prevLastDate-1) self.parent().addClass('yesterday');
				else if (dayOfWeek==monday && day=='03' && textDate==prevLastDate) self.parent().addClass('yesterday');
			});
			$('.pub-modify-copy').off('click').on('click', function (e) {
				var text=$('.pub-modify .pub-modify-list>div:visible').text();
				$('body').append('<textarea id="pub-modify-textarea"></textarea>');
				$('#pub-modify-textarea').val(text).select();
				document.execCommand('Copy');
				$('#pub-modify-textarea').remove();
				clipboardCopyMsg();
			});
		}
		$(document).on('click', '.pub-modify-close', function () {
			$('.pub-modify-open').trigger('click');
		});

		$(document).bind('mouseup touchend', function(e) {
			var target=$('.pub-total');
			if (!target.is(e.target) && target.has(e.target).length==0) $('.pub-total .pub-button-detail').attr('aria-expanded', 'false').closest('.pub-total').parent().parent().removeClass('on');
			var target=$('.pub-record');
			if (!target.is(e.target) && target.has(e.target).length==0) {
				$('.pub-record>button').attr('aria-expanded', 'false').next().slideUp(200);
				setTimeout(function() {
					if ($('.pub-record .pub-option>button').hasClass('on')) {
						$('.pub-record a').removeClass('on').next().hide();
						$('.pub-record .progress a').addClass('on').next().show();
					} else {
						$('.pub-record button.on').closest('div').show().prev().addClass('on').parent().siblings().find('a.on').removeClass('on').next().hide();
					}
				}, 300);
			}
		});

		/* 검색 */
		function isCho(e) {
			var t = /[ㄱ-ㅎ]/gi;
			return t.test(e)
		}
		function cho_hangul(e) {
			for (cho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"], result = "", i = 0; i < e.length; i++) code = e.charCodeAt(i) - 44032, code > -1 && code < 11172 ? result += cho[Math.floor(code / 588)] : result += e.charAt(i);
			return result
		}
		$('.pub-header .pub-search input').keyup(function() {
			var reset=$('.pub-header .pub-record .pub-option>button');
			reset.parent().prev().removeClass('on').html('# 전체');
			reset.addClass('on');
			reset.next('.pub-option-inr').find('button').removeClass('on');
			reset.next('.pub-option-inr').find('a').removeClass('on').next().hide();
			reset.next('.pub-option-inr').find('.progress a').addClass('on').next().show();

			var value=$(this).val().toLowerCase(),
				valueSpacing=$(this).val().toLowerCase().replace(' ','');
			$('.pub-site .pub-table .pub-tbody tr').filter(function() {
				if (isCho(value)) {
					 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1 || (cho_hangul($(this).text().toLowerCase()).toLowerCase().indexOf(cho_hangul(value)) > -1));
					 $(this).toggle($(this).text().toLowerCase().replace(' ','').indexOf(valueSpacing) > -1 || (cho_hangul($(this).text().toLowerCase()).toLowerCase().replace(' ','').indexOf(cho_hangul(valueSpacing)) > -1));
				} else {
					$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
					$(this).toggle($(this).text().toLowerCase().replace(' ','').indexOf(valueSpacing) > -1);
				}
			});
			var highlight=$('td[class*="dep"] span:contains("'+value+'"), td.screen span:contains("'+value+'"), td.id strong:contains("'+value+'"), td.publisher:contains("'+value+'"), td.planner:contains("'+value+'"), td.developer:contains("'+value+'")');
			highlight.each(function () {
				var regex = new RegExp(value,'gi');
				$(this).html( $(this).text().replace(regex, "<i class='pub-highlight'>"+value+"</i>") );
			});
			if ($(this).val().trim()=='') $('.pub-highlight').remove();
		});
	}

	/* GUIDE */
	if ($('.pub-wrap').attr('data-layout')=='guide') {
		$('.pub-site .pub-template').each(function() {
			if ($(this).find('.pub-code').length) $(this).find('.pub-code').append('<button type="button" class="pub-copy"></button>');
		});
		$('.pub-site .pub-site-content .pub-code').each(function() {
			var code=$(this).find('.pub-pre').html(),
				result=code.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
			$(this).find('.pub-copy').on('click', function() {
				$('body').append('<textarea id="pub-code-textarea"></textarea>');
				$('#pub-code-textarea').val(result).select();
				document.execCommand('Copy');
				$('#pub-code-textarea').remove();
				clipboardCopyMsg();
			});
		});
	}

	/* CONVENTION */
	if ($('.pub-wrap').attr('data-layout').indexOf('direction')!=-1) {
		$('.pub-version').on('click', function() {
			$(this).toggleClass('on');
		});
		$(document).bind('mouseup touchend', function(e) {
			var target=$('.pub-version');
			if (!target.is(e.target) && target.has(e.target).length==0) $('.pub-version').removeClass('on');
		});
	}

	/* COMMON */
	var pub_global='';
		pub_global += '<div class="pub-global">';
			pub_global += '<ul>';
				pub_global += '<li><a href="guide.html"><span>Guide</span></a></li>';
				pub_global += '<li><a href="convention.html"><span>Convention</span></a></li>';
				pub_global += '<li><a href="accessibility.html"><span>Accessibility</span></a></li>';
			pub_global += '</ul>';
			pub_global += '<button type="button" class="pub-global-close on"><span></span><span></span><span></span></button>';
		pub_global += '</div>';
	var pub_nav='';
		pub_nav += '<div class="pub-nav">';
			pub_nav += '<div class="pub-nav-inr">';
				pub_nav += '<div class="pub-all"><a href="#menu0" class="on"><span>전체</span></a></div>';
				pub_nav += '<div class="pub-menu"></div>';
			pub_nav += '</div>';
		pub_nav += '</div>';
	if ($('.pub-wrap').attr('data-layout')!='index') {
		$('.pub-header').append(pub_global);
		$('.pub-global a').each(function() {
			var self=$(this),
				selfText=self.text().toLowerCase();
			if ($('.pub-wrap').attr('data-layout').indexOf(selfText)!=-1) self.addClass('on');
		});
	}
	$('.pub-header .pub-title').after(pub_nav);

	function device() {
		var filter="win16|win32|win64|mac";
		var isMobile=navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/) || filter.indexOf(navigator.platform.toLowerCase()) < 0 ? true : false;
		if (isMobile) $('html').attr('id', 'isMobile');
		else $('html').removeAttr('id', 'isMobile').find('body').removeClass('pub-nav-up').addClass('pub-nav-down');
	} device();
	$(window).on('resize', function() { device(); });

	var didScroll,
		lastScrollTop=0,
		delta=0;
	$(window).scroll(function(event) {
		didScroll=true;
	});
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll=false;
		}
	}, 100);

	function hasScrolled() {
		var st=$(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) {return;}
		if (st>lastScrollTop) { //Scroll Down
			$('body').removeClass('pub-nav-down').addClass('pub-nav-up');
			$('.pub-page-top').removeClass('on');
		}
		else if (st + $(window).height() + 100 < $(document).height()) { //Scroll Up
			$('body').removeClass('pub-nav-up').addClass('pub-nav-down');
			$('.pub-page-top').addClass('on');
		}
		if ($(document).scrollTop() <= delta + 10) { //최상단
			$('body').removeClass('pub-nav-down').addClass('pub-nav-top');
			$('.pub-page-top').removeClass('on');
		}
		else $('body').removeClass('pub-nav-top');
		if (st == $(document).height() - $(window).height()) { //최하단
			$('body').addClass('pub-nav-bottom');
		}
		else $('body').removeClass('pub-nav-bottom');
		lastScrollTop=st;
	}
	$(window).on('scroll', function() {
		scrollProgress();
		$('.pub-header .pub-legend .pub-global-btn').attr('aria-expanded', 'false');
		$('.pub-header .pub-global').removeClass('on');
	});
	$('body').prepend('<div class="pub-scroll-progress"></div>');
	$('.pub-wrap').append('<div class="pub-page-top"><button type="button"></button></div>');
	function scrollProgress() {
		if (($(document).outerHeight()-$(window).height())<1) currentPercentage=0;
		else currentPercentage=($(window).scrollTop()/($(document).outerHeight()-$(window).height()))*100;
		$('.pub-scroll-progress').width(currentPercentage+'%');
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
		var index=$('.pub-site').index($(this)[0]);
		$(this).attr('id','menu'+index);
	});
	$('.pub-header .pub-nav .pub-menu').each(function() {
		var self=$(this),
			arrtabhtml=[],
			i=0;
		$('.pub-site .pub-site-title h2>span').each(function() {
			var text=$(this).text();
			arrtabhtml.push('<li><a href=\'#\' title=\''+text+'\'><span>'+text+'</span></a></li>');
			i++
		});
		if ($('.pub-site .pub-site-title h2>span').length>0) self.append('<ul>'+arrtabhtml.join('\n')+'</ul>');
	});
	$('.pub-header .pub-nav li').each(function() {
		var index=$('.pub-nav li').index($(this)[0]);
		$(this).find('> a').attr('href','#menu'+index);
	});
	$('.pub-header .pub-nav a').on('click', function() {
		scrollProgress();
		if (!$(this).hasClass('on')) {
			$('.pub-header').removeClass('pub-nav-up');
			if (!$(this).parent().hasClass('pub-all')) {
				var viewBox=$(this).attr('href');
				$('.pub-site').fadeOut(0);
				$('.pub-site'+viewBox).fadeIn(100);
				$('.pub-site .pub-table>table').show();
			}
			else $('.pub-site').fadeIn(100);
			$(this).closest('.pub-nav').find('a').removeClass('on');
			$(this).addClass('on');
			$('html,body').animate({scrollTop:0}, 0);

			var menu=$(this);
			var scrItem=$('.pub-menu li');
			var scrIWidth=0;
			for (var i=0; i<scrItem.length; i++) scrIWidth+=scrItem.eq(i)[0].getBoundingClientRect().width;
			var target=menu.parent();
			muCenter(target);
			function muCenter(target){
				var box=menu.closest('.pub-nav-inr');
				var boxItem=box.find('li');
				var boxHarf=box.width()/2;
				var pos;
				var listWidth=0;
				var targetLeft=0;
				boxItem.each(function(){ listWidth+=$(this)[0].getBoundingClientRect().width; });
				for (var i=0; i<target.index(); i++) targetLeft+=boxItem.eq(i)[0].getBoundingClientRect().width; // 선택요소 까지 길이
				var selectTargetPos=(targetLeft+target.outerWidth()/2);
				if (selectTargetPos<=boxHarf) pos=-50; // left
				else if (listWidth-selectTargetPos<=boxHarf) pos=listWidth-box.width()+30; //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
				else pos=selectTargetPos-boxHarf; // 중앙정렬
				box.animate({scrollLeft:pos+50}, 300);
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
}, 50);