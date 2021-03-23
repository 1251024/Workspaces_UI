
function makeTable(elem) {															//makeTable함수는 파라미터로 elem을 가져올거야
	//var 생략하면 전역변수로 만들어짐 
	$table = $("<table border=1>");													//table 만들고 테이블에 테두리 줄거고

	for (var i = 0; i < 1; i++) {													// 변수 i에 0보다 크고 1보다 작은 값이 올 수 있다
		$tr = $("<tr>");															//tr태그를 만들고
		for (var j = 0; j < elem.eq(0).children().length; j++) {					//변수 j 는 0보다 크고 파라미터elem 0번지부터 자식요소의 길이만큼 가져올거야
			$td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));	//td태그를 만들고  elem 0번지의 자식요소 를 eq j번지의 tagname을 추가할거야
			$tr.append($td);														//tr다음에 td를 추가할거야.
		}
		$table.append($tr);															//테이블에 tr 추가할거
	}


	for (var i = 0; i < elem.length; i++) {											//0보다 크고 i보다 크고 elem의 row갯수만큼
		$tr = $("<tr>");															//tr태그 추가하고
		for (var j = 0; j < elem.eq(i).children().length; j++) {					//변수 j elem 자식요소 길이만큼 추가
			$td = $("<td>").append(elem.eq(i).children().eq(j).text());				//td 태그를 만들어서 태그에 elem의 자식요소의 값을 추가
			$tr.append($td);														//tr에 td 추가
		}
		$table.append($tr);															//테이블에 tr 추가
	}
	return $table;																	//테이블을 리턴한다
}
