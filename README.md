# Petri Júnior - Website Institucional

Este é o site corporativo da **Petri Júnior**, Empresa Júnior de Engenharia de Bioprocessos e Biotecnologia da Universidade Federal do Tocantins (UFT), Câmpus Gurupi.

## 📁 Como Gerenciar Conteúdo

### 📸 Nossos Momentos (Galeria Dinâmica)
Para adicionar novas fotos à galeria na página "Quem Somos", você **não precisa mexer no HTML**. 
1. Abra o arquivo `assets/js/main.js`.
2. Procure pela variável `momentsData`.
3. Adicione um novo bloco seguindo este formato rigoroso:
```javascript
{
  date: '2025-05-20', // Formato ANO-MES-DIA (Obrigatório para ordenação)
  title: 'Título do Evento',
  subtitle: 'Contexto ou Local',
  desc: 'Descrição curta da vivência.',
  img: 'link-da-imagem.jpg' // URL ou caminho local
}
```
*O site organizará automaticamente as fotos da mais recente para a mais antiga na interface.*

### 👥 Nosso Time e Pós-Juniores
Para atualizar membros, cargos, períodos de atuação ou links (LinkedIn/Lattes), edite o arquivo `quem-somos.html`. 
- Procure pelas classes `team-card` para membros ativos.
- O Dr. Alex Fernando (Orientador) tem um card especial com a classe `advisor-card`.
- Clarisse Cirqueira (Co-fundadora) está na seção de Pós-Juniores.

### 📍 Localização (Google Maps)
O link oficial de localização é: `https://maps.app.goo.gl/dVZnPQQuUby6GEDA7`.
Para atualizar o mapa visual (iframe), edite o arquivo `contato.html` na seção `.map-container`.

---
*© 2026 Petri Júnior. Desenvolvido para transformar ciência em solução.*
