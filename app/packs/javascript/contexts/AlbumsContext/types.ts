import { AlbumModel } from '../../models';

export interface IAlbumsContext {
  albums: AlbumModel[];
  fetchAlbums: () => void;
}
