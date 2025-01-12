import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upscaleImage',
})
export class UpscaleImagePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (typeof value === 'string') {
      return value.replace('64x64', '128x128');
    }
    return value;
  }
}
