#include <stddef.h>
#include <string.h>
#include <stdlib.h>

typedef char Pair[2];

Pair *split_2(const char *string, size_t *n_pairs) {
// report the length of your array through `n_pairs` and return a freeable pointer
  
    if(string == NULL) {
      *n_pairs = 0;
      return NULL;
    }
    
    size_t dim = strlen(string);
    if(dim % 2 == 0) {
      *n_pairs = strlen(string) / 2;
    } else {
      *n_pairs = (strlen(string) / 2) + 1;
    }
  
    Pair *ris = malloc((*n_pairs) * sizeof(Pair));
      
    size_t k = 0;
    for(size_t i = 0; i < *n_pairs; i++) {
      ris[i][0] = string[k++];
        
      if(k < dim) {
        ris[i][1] = string[k++];
      } else {
        ris[i][1] = '_';
      }
    }
    return ris;
}
