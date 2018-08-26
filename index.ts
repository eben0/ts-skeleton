async function main (args: string[]) {
  console.log('Hello world')
  console.log(args)
}

main(process.argv.slice(1))
  .catch(err => {
    console.error(err.stack)
    process.exitCode = 1
  })
