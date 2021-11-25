const http = require('http')
const fs = require('fs')

const PORT = 3000
const SUCCESS_CODE = 200

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = SUCCESS_CODE
      res.setHeader('Content-Type', 'text/html')
      const paginaIndex = fs.readFileSync('index.html', 'utf-8')
      res.write(paginaIndex)
      res.end()
      break
    case '/cursos':
      res.statusCode = SUCCESS_CODE
      res.setHeader('Content-Type', 'application/json')
      const cursos = [
        {
          curso: 'Análise e Desenvolvimento de Sistemas',
          sigla: 'ADS'
        },
        {
          curso: 'Matemática',
          sigla: 'MAT'
        },
        {
          curso: 'Física',
          sigla: 'FIS'
        },
        {
          curso: 'Administração',
          sigla: 'ADM'
        }
      ]
      res.end(JSON.stringify(cursos))
      break
    case '/alunos':
      res.statusCode = SUCCESS_CODE
      res.setHeader('Content-Type', 'application/json')
      const alunos = [
        {
          aluno: 'João Henrique',
          idade: 27
        },
        {
          aluno: 'Júlio Leal',
          idade: 22
        },
        {
          aluno: 'Ricardo Fonseca',
          idade: 35
        },
        {
          aluno: 'Thaís Coelho',
          idade: 26
        }
      ]
      res.end(JSON.stringify(alunos))
      break
    default:
      res.statusCode = 404
      res.end('Error! Page NOT found!')
  }
})

server.listen(PORT, () => {
  console.log('Servidor rodando com sucesso! Porta alocada: ', PORT)
})
