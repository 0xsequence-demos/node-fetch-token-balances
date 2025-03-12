import { SequenceIndexerGateway, Page } from "@0xsequence/indexer";

// get yours at https://sequence.build
const projectAccessKey = 'AQAAAAAAAF_JvPALhBthL7VGn6jV0YDqaFY'

const main = async () => {
  const indexer = new SequenceIndexerGateway("https://indexer.sequence.app", projectAccessKey)


  let page: Page = {}

  // NOTE: you can adjust pageSize to get more or less results.
  // or just leaveit empty and use the defaults.
  // page.pageSize = 5

  while (true) {
    const { balances, page: nextPage } = await indexer.getTokenBalances({
      accountAddress: "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9",
      page
    })

    // print balances
    console.log('=> balances found:', balances.length)
    console.log('=> balances:', balances)

    // query for next page or finish
    if (!nextPage.more) {
      // no more pages, we're done.
      break
    } else {
      // set cursor to next page and query again
      page = nextPage
    }
  }

}

main()

