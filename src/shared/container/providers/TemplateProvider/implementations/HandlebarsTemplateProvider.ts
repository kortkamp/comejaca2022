import fs from 'fs';
import handlebars from 'handlebars';

import IParseTemplateDTO from '../dtos/IParseTemplateDTO';
import ITemplateProvider from '../models/ITemplateProvider';

class HandlebarsMailTemplateProvider implements ITemplateProvider {
  public async parse({ file, variables }: IParseTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
