import { logger } from "./utils";

async function run (){
logger.info('hello world')
}

run().catch(err=>{
  logger.error(err);
});