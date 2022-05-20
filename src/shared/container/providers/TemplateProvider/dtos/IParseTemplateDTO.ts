interface ITemplateVariables {
  [key: string]: string | number | Date;
}

export default interface IParseTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
