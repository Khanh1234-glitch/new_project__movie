import { ListCinema } from './listCinema';
export interface SystemCinema {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
  danhSachPhim: ListCinema[];
}
