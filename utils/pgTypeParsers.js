function setPgTypeParsers(pgModule) {
  /* BigInt parser: */
  pgModule.types.setTypeParser(20, parseInt);
}

export { setPgTypeParsers };
