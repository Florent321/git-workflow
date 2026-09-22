/**
 * Fonction de connexion
 * Gère l'authentification de l'utilisateur
 */
function login() {
  // 1. Récupérer les valeurs du formulaire
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;

  // 2. Valider que les champs ne sont pas vides
  if (!email || !password) {
    alert('Veuillez remplir tous les champs');
    return false;
  }

  // 3. Valider le format de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Veuillez entrer une adresse email valide');
    return false;
  }

  // 4. Valider la longueur du mot de passe
  if (password.length < 6) {
    alert('Le mot de passe doit contenir au moins 6 caractères');
    return false;
  }

  // 5. Préparer les données pour l'envoi
  const loginData = {
    email: email,
    password: password
  };

  // 6. Envoyer les données au serveur (exemple avec fetch)
  console.log('Envoi des données de connexion:', loginData);
  
  // Décommenter pour utiliser avec un serveur réel:
  /*
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Connexion réussie
      alert('Connexion réussie!');
      window.location.href = '/dashboard';
    } else {
      // Erreur de connexion
      alert('Email ou mot de passe incorrect');
    }
  })
  .catch(error => {
    console.error('Erreur:', error);
    alert('Une erreur s\'est produite lors de la connexion');
  });
  */

  // 7. Message de succès (à remplacer par la redirection réelle)
  console.log('Connexion en cours...');
  return true;
}

/**
 * Fonction utilitaire pour réinitialiser le formulaire
 */
function resetForm() {
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}
