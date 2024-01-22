class Cluster {
  constructor(cluster) {
    this.cluster = cluster;

    for (let star in this.cluster) {
      new Star(
        this.cluster[star].x,
        this.cluster[star].y,
        this.cluster[star].size
      );
    }
  }
}
