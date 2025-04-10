window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '3. 📌 Ativar Pixel',
      callback: function(t) {
        return t.card('id')
          .then(function(card) {
            const webhookUrl = `https://n8n.api-blogfeelgood.fun/webhook/ativar-pixel?cardId=${card.id}`;
            return fetch(webhookUrl, {
              method: 'GET'
            })
            .then(() => t.alert({ message: '✅ Pixel Ativo!' }))
            .catch(() => t.alert({ message: '⏳ Ativando...' }));
          });
      }
    }];
  }
});
