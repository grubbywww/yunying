function create(){
    phone=$("#phone").val();
    content=$("#content").val();
    $("#sample_6").find("tr:eq(0)").after("<tr><td>"+phone+"</td><td>"+content+"</td><td></td></tr>")
}
