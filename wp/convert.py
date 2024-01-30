#!/usr/bin/env python

"""
Convert records in old WordPress database dumps into YAML and Markdown
templates for the new web site.
"""

import pathlib as pl
import csv

class Convert:


    def __init__(self, what: str):

        self.what = what
        self.tbl, self.meta  = (
            csv.DictReader('dumps' / pl.Pathf(f'{what}s.csv'))
            for pfx in ('s', '-meta')
        )


    def process(self):

        getattr(self, f'_process_{self.what}')()


    def _process_person(self):

        pass


    def _process_tool(self):

        pass


    def _process_pub(self):

        pass
