export class UrlService {
  public sanitizeUrl = (url: string): string => {
    return url.replace(/\s+/g, '');
  };
}
