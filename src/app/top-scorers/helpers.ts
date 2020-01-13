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
      case 'PerHE++':
        return 'perhe_lisays_logo.svg';
      case 'PerHE':
        return 'perhe_logo.svg';
      case 'PePa':
        return 'pepa.svg';
      case 'UrSut':
        return 'ursut.svg';
      case 'SSR':
        return 'ssr_aito.png';
      default:
        return team;
    }
  }
}
