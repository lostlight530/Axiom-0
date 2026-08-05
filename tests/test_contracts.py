import math
import unittest
from CODE.contracts import canonical_json, kl_divergence, normalize_distribution, stable_digest


class ContractTests(unittest.TestCase):
    def test_canonical_json_is_stable(self):
        self.assertEqual(canonical_json({"b": 1, "a": "值"}), '{"a":"值","b":1}')
        self.assertEqual(stable_digest({"a": 1}), stable_digest({"a": 1}))

    def test_kl_identity_and_infinite_support_mismatch(self):
        self.assertEqual(kl_divergence([1, 2], [1, 2]), 0.0)
        self.assertTrue(math.isinf(kl_divergence([1, 0], [0, 1])))

    def test_invalid_distributions_fail_closed(self):
        for values in ([], [0, 0], [-1, 2], [math.nan, 1], [True, 1]):
            with self.subTest(values=values), self.assertRaises((TypeError, ValueError)):
                normalize_distribution(values, name="test")
        with self.assertRaises(ValueError):
            kl_divergence([1], [1, 2])