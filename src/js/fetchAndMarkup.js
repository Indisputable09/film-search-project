import { makeMarkupCard } from './cardMarkup';
import { genreLoad } from './workWithGenres';
import { setCurrenDataToLS } from './currentPageData';
import { renderPagination } from './renderPagination';
import { resetTextAlertSearch } from './moviesKeyword';

export let oldTrendMovie = undefined;

export async function fetchTrendAndMarkup(classIstance) {
  try {
    await genreLoad(classIstance);
    const data = await classIstance.fetchTrend();
    setCurrenDataToLS(data.results);
    makeMarkupCard(data);
    renderPagination(data);
    classIstance.lastPage = data.total_pages;
    oldTrendMovie = classIstance;
    resetTextAlertSearch();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchAndMarkup(classIstance) {
  try {
    await genreLoad(classIstance);
    const data = await classIstance.fetchSearch();
    setCurrenDataToLS(data.results);
    makeMarkupCard(data);
    renderPagination(data);
    classIstance.lastPage = data.total_pages;
    resetTextAlertSearch();
  } catch (error) {
    console.log(error);
  }
}

export function resetOldTrendMovie() {
  oldTrendMovie = undefined;
}
