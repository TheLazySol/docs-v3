'use client';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
  SearchDialog,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';

export default function DefaultSearchDialog(props: SharedProps) {
  const { search, setSearch, query } = useDocsSearch({
    type: 'fetch',
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      results={query.data ?? []}
      {...props}
    />
  );
}
