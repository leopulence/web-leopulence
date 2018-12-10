from django import template

register = template.Library()

@register.simple_tag
def is_pair(pair):
    pair %=2
    if pair == 0:
        return True
    else:
        return False