export class Helpers {
  static teamAbbreviation(team: string) {
    switch (team) {
      case 'PerHE++':
        return 'P++';
      default:
        return team;
    }
  }

  static teamLogo(team: string) {
    switch (team) {
      case 'UusPerHE':
        return 'uus_perhe_logo_2.svg';
      case 'PerHE':
        return 'perhe_logo.svg';
      case 'PePa':
        return 'pepa.svg';
      case 'UrSut':
        return 'ursut.png';
      case 'SSR':
        return 'ssr_aito.png';
      default:
        return team;
    }
  }
}
