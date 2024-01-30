/*
 *   Dump the old site's WordPress database data into CSV files.
 */

SELECT
        p.ID, p.post_title, m.meta_key, m.meta_value
    FROM wp_rKla_posts AS p
    LEFT JOIN wp_rKla_postmeta AS m
        ON p.ID = m.post_id
    WHERE post_type = 'person'
    INTO OUTFILE 'person-meta.csv';

SELECT
        p.ID, p.post_title, m.meta_key, m.meta_value
    FROM wp_rKla_posts AS p
    LEFT JOIN wp_rKla_postmeta AS m
        ON p.ID = m.post_id
    WHERE post_type = 'tool'
    INTO OUTFILE 'tool-meta.csv';

SELECT
        p.ID, p.post_title, m.meta_key, m.meta_value
    FROM wp_rKla_posts AS p
    LEFT JOIN wp_rKla_postmeta AS m
        ON p.ID = m.post_id
    WHERE post_type = 'publication'
    INTO OUTFILE 'pub-meta.csv';

SELECT *
    FROM wp_rKla_posts
    WHERE post_type = 'person'
    INTO OUTFILE 'persons.csv';

SELECT *
    FROM wp_rKla_posts
    WHERE post_type = 'tool'
    INTO OUTFILE 'tools.csv';

SELECT *
    FROM wp_rKla_posts
    WHERE post_type = 'publication'
    INTO OUTFILE 'pubs.csv';
