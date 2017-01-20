function create(){

    phone=$("#phone").val();
    content=$("#content").val();
    if (phone==""){
        alert("联系方式不能为空");
        return false;
    }
    $("#sample_6 tbody").append("<tr><td>"+phone+"</td><td>"+content+"</td><td></td></tr>");

}
