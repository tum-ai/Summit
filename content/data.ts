// Real GDP growth, annual % change. Source: IMF World Economic Outlook via DataMapper (indicator NGDP_RPCH),
// fetched 2026-11-12 from https://www.imf.org/external/datamapper/api/v1/NGDP_RPCH/DEU/USA. 2025 values may be estimates.
export const gdpGrowth = {
  source: "IMF, World Economic Outlook. Germany, real GDP, 2017 = 100. 2025 estimated.",
  years: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  germany: [1.2, 1.1, -4, 4, 1.9, -1, 0, 0.2],
};

/** Cumulative index, 2017 = 100. */
export const toIndex = (rates: number[]) =>
  rates.reduce<number[]>((acc, r) => [...acc, acc[acc.length - 1] * (1 + r / 100)], [100]);
