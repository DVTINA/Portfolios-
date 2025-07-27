<?php
header('Access-Control-Allow-Origin: https://votre-utilisateur.github.io/portfolio');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        header('Location: https://votre-utilisateur.github.io/portfolio?error=' . urlencode('Veuillez remplir tous les champs correctement.'));
        exit;
    }

    try {
        $stmt = $db->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $message]);
        header('Location: https://votre-utilisateur.github.io/portfolio?message=' . urlencode("Merci $name ! Votre message a été envoyé."));
        exit;
    } catch (PDOException $e) {
        header('Location: https://votre-utilisateur.github.io/portfolio?error=' . urlencode('Erreur lors de l\'envoi du message : ' . $e->getMessage()));
        exit;
    }
} else {
    header('Location: https://votre-utilisateur.github.io/portfolio?error=' . urlencode('Méthode non autorisée.'));
    exit;
}
?>
