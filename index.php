
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email_destino = "pereirastconstrutora@gmail.com"; 
    
   
    $nome = strip_tags(trim($_POST['nome']));
    $whatsapp = strip_tags(trim($_POST['whatsapp']));
    $email_cliente = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $assunto_site = strip_tags(trim($_POST['assunto']));
    $mensagem = strip_tags(trim($_POST['mensagem']));

   
    $email_content = "Nova mensagem do site Pereira & Santos\n";
    $email_content .= "====================================\n\n";
    $email_content .= "Nome: $nome\n";
    $email_content .= "WhatsApp: $whatsapp\n";
    $email_content .= "Email: $email_cliente\n";
    $email_content .= "Assunto: $assunto_site\n\n";
    $email_content .= "Mensagem:\n$mensagem\n";

   
    $email_headers = "From: Pereira & Santos <contato@seudominio.com.br>\r\n";
    $email_headers .= "Reply-To: $email_cliente\r\n";

    
    if (mail($email_destino, "CONTATO SITE: $assunto_site", $email_content, $email_headers)) {
        echo "<script>alert('Sua mensagem foi enviada com sucesso!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Ops! Algo deu errado. Tente novamente ou chame no WhatsApp.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>