async function showFinalModal() {
  const jsonString = localStorage.getItem('quizResult');
  const myObject = JSON.parse(jsonString);

  await fetch("https://viktorina-backend.onrender.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: myObject.name,
      score: myObject.score,
      wrong: myObject.wrong
    })
  });

  document.querySelector('#score-content').innerHTML = `
    <h2>🏁 Квиз завершён</h2>
    <p><b>${myObject.name}</b></p>
    <p>Всего вопросов ${myObject.score}</p>
    <p>❌ Ошибок: ${myObject.wrong}</p>
  `;
}
