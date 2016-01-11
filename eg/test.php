<?
	header('Content-type:text/json');     //这句是重点，它告诉接收数据的对象此页面输出的是json数据；
 
	$json={"n":"name","p":"password"};           //虽然这行数据形式上是json格式，如果没有上面那句的话，它是不会被当做json格式的数据被处理的；
	 
	echo $json;
?>