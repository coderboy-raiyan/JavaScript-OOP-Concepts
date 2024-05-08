class DatabaseConnection {
  static connection: string;

  // ES 2022 feature
  static {
    if (process.env.NODE_ENV === "production") {
      DatabaseConnection.connection =
        DatabaseConnection.loadProductionConnection();
    } else {
      DatabaseConnection.connection =
        DatabaseConnection.loadDevelopmentConnection();
    }
  }

  static loadDevelopmentConnection(): string {
    return "URI";
  }

  static loadProductionConnection(): string {
    return "URI";
  }
}
